import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-unirse',
  templateUrl: './unirse.page.html',
  styleUrls: ['./unirse.page.scss'],
})
export class UnirsePage implements OnInit {
  userdata: any;
  usuario={
    id:'',
    username:'',
    email:'',
    password:'',
    conductor:true,
    esperando:false
  }
  loginForm: FormGroup;

  constructor(private authservice: AuthService,
              private router: Router,
              private alertcontroller: AlertController, 
              private toastcontroller: ToastController,
              private builder: FormBuilder) {
                this.loginForm = this.builder.group({
                  'email': new FormControl("", [Validators.required, Validators.minLength(8), Validators.email]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(8)])
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
      this.authservice.GetUserById(this.loginForm.value.email).subscribe(resp=>{ 
        this.userdata = resp;
        console.log(this.userdata);
        console.log("probando error");
        if (this.userdata.length>0){ //el objeto que buscamos existe en JSON
          this.usuario = {
            id: this.userdata[0].id,
            username: this.userdata[0].username,
            email:this.userdata[0].email,
            password: this.userdata[0].password,
            conductor: this.userdata[0].conductor,
            esperando: this.userdata[0].esperando
          }
          console.log("2222");
          if (this.usuario.password === this.loginForm.value.password){
            if (this.usuario.conductor){
              sessionStorage.setItem('username', this.usuario.username);
              sessionStorage.setItem('email',this.usuario.email);
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl('/saludo2');
              this.loginForm.reset();
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
          console.log("3333");

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
