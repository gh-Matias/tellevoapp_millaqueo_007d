import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  userdata: any;

  usuario={
    id:0,
    username:"",
    correo:"",
    password:"",
    role:"",
    isactive:false
  }
  loginForm: FormGroup;

  constructor(private authservice: AuthService,
              private router: Router,
              private alertcontroller: AlertController, 
              private toastcontroller: ToastController,
              private builder: FormBuilder) {
                this.loginForm = this.builder.group({
                  'correo': new FormControl("", [Validators.required, Validators.minLength(4), Validators.email]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(4)])
                })
               }

  ngOnInit() {
  }
  async olvidar() {
    const alert = await this.alertcontroller.create({
      header: 'Enviaremos un codigo al correo para cambiar su contraseña',
      buttons: ['Enviar'],

      inputs: [
        {
          placeholder: 'Ingrese el Correo de su cuenta',
          type: 'email'
        }
  
      ],
    });

    await alert.present();
  }
  
  login(){
    console.log("Codificando login");
    if (this.loginForm.valid){
      this.authservice.GetUserById(this.loginForm.value.correo).subscribe(resp=>{ 
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ //el objeto que buscamos existe en JSON
          this.usuario = {
            id: this.userdata[0].id,
            username: this.userdata[0].username,
            correo:this.userdata[0].correo,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive
          }
          if (this.usuario.password === this.loginForm.value.password){
            if (this.usuario.isactive){
              sessionStorage.setItem('username', this.usuario.username);
              sessionStorage.setItem('correo',this.usuario.correo);
              sessionStorage.setItem('role', this.usuario.role);
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl('/saludo');
            }
            else{
              this.UserInactivo();
              this.loginForm.reset();
            }
          }
          else{
            this.DatoError();
            this.loginForm.reset();
          }

        }
        else{
          this.Noexiste();
          this.loginForm.reset();
        }

      })
    }
  }//login

  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 3000
    });
    toast.present();
  }

  async UserInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error..',
      message: 'Usuario inactivo, contacte a admin@admin.cl',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async DatoError(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error..',
      message: 'Revise sus credenciales',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async Noexiste(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Debe registrarse',
      message: 'Usuario incorrecto',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }
}
