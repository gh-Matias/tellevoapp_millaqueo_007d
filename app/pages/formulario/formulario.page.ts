import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Users, Movil } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  newUsuario: Users={
    id: 0,
    username:"",
    correo: "",
    password: "",
    role: "",
    isactive: true,
  }
  newVehiculo: Movil={
    tipo: "",
    matricula: "",
    capacidad: 0,
  }
  loginForm: FormGroup;
  
  constructor(
    private apiCrud: ApicrudService,
    private router: Router,
    private alertController: AlertController,
    private builder: FormBuilder) {

      this.loginForm = this.builder.group({
        correo: new FormControl("", [Validators.required, Validators.minLength(4), Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(4)])
        
      });
     }

  ngOnInit() {
  }  
  async ingresar() {
    //if (this.loginForm.valid) {
    const alert = await this.alertController.create({
      header: 'Gracias por registrarse',
      message: 'Sus datos se han guardado exitosamente!',
      buttons: ['OK']
      
    });
    this.apiCrud.CrearUsuario(this.newUsuario).subscribe();
    this.apiCrud.CrearVehiculo(this.newVehiculo).subscribe();
    this.router.navigateByUrl("/inicio");
    await alert.present();
  // }
}}
