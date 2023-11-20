import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../interfaces/interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  newUsuario : User ={
    username: '',
    password: '',
    role: '',
    isactive: false
  }

  constructor(private authservice: AuthService, 
              private alertcontroller: AlertController,
              private router: Router,
              private fbuilder: FormBuilder) {
                this.registroForm = this.fbuilder.group({ 
                  'username': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
                  'rol': new FormControl("", Validators.required)
                })
               }

  ngOnInit() {
  }

  crearUsuario(){
    //creamos un objeto
    this.newUsuario.username = this.registroForm.value.username; 
    this.newUsuario.password = this.registroForm.value.password;
    this.newUsuario.role = this.registroForm.value.rol;
    this.newUsuario.isactive=true;
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
    alerta.present();
  }

}
