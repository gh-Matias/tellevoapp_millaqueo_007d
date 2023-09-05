import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  persona={
    email:'',
    password:''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  
  //método que permite ingresar datos a través de un alert 
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
