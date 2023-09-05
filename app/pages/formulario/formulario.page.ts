import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  persona={
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    password:''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async ingresar() {
    const alert = await this.alertController.create({
      header: 'Gracias por registrarse',
      message: 'Sus datos se han guardado exitosamente!',
      buttons: ['OK'],
    });

    await alert.present();
    this.persona.nombre='',
    this.persona.apellido='',
    this.persona.email='',
    this.persona.telefono='',
    this.persona.password=''

  }

}
