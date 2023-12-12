import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { User,Users } from '../interfaces/interfaces';

@Component({
  selector: 'app-pasajeroform',
  templateUrl: './pasajeroform.page.html',
  styleUrls: ['./pasajeroform.page.scss'],
})
export class PasajeroformPage implements OnInit {
  registroForm: FormGroup;

  newUsuario : Users={
    username: '',
    email:'',
    password: '',
    conductor:true,
    esperando:false

  }

  constructor(private authservice: AuthService,
              private apicrudservice: ApicrudService, 
              private alertcontroller: AlertController,
              private router: Router,
              private reactiveformsmodule:ReactiveFormsModule,
              private fbuilder: FormBuilder) {
                this.registroForm = this.fbuilder.group({ 
                  'username': new FormControl("", [Validators.required, Validators.minLength(4),Validators.maxLength(10),]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(8),Validators.maxLength(15)]),
                  'email': new FormControl("", [Validators.required, Validators.minLength(8),Validators.maxLength(15), Validators.email]),
                  'direccion': new FormControl("", [Validators.maxLength(15),])
                })
               }

  ngOnInit() {
  }

  crearUsuario(){
    //creamos un objeto
    //if (this.registroForm.valid)
    this.newUsuario.username = this.registroForm.value.username; 
    this.newUsuario.email = this.registroForm.value.email;
    this.newUsuario.password = this.registroForm.value.password;
    this.newUsuario.conductor=true;
    this.newUsuario.esperando=false;
    this.authservice.CrearUsuario(this.newUsuario).subscribe();
    this.mostrarMensaje();
    this.registroForm.reset();
    

  }

  async mostrarMensaje(){
    const alerta= await this.alertcontroller.create({ 
      header:'Usuario creado',
      message: 'Gracias! ' + this.newUsuario.username + ' ha sido registrado',
      buttons: ['Ok']
    });
    this.router.navigateByUrl("/inicio");
    await alerta.present();
  }

}
export class PasajeroformPageModule {}

