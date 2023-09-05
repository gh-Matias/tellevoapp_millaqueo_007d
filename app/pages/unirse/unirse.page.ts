import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-unirse',
  templateUrl: './unirse.page.html',
  styleUrls: ['./unirse.page.scss'],
})
export class UnirsePage implements OnInit {
  persona={
    email:'',
    password:''
  }
 

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async olvidar() {
    const alert = await this.alertController.create({
      header: 'Enviaremos un codigo al correo para cambiar su contraseña',
      buttons: ['Enviar'],

      inputs: [
        {
          placeholder: 'Correo de su cuenta',
          type: 'email'
        }
  
      ],
    });

    await alert.present();
  }

}
