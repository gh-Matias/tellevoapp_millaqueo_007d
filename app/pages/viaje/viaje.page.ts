import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage {

  vehiculo={
    matricula:'',
    marca:'',
    color:'',
    tarifa:'',
    capacidad:''
  }

  constructor(private alertController: AlertController) {}
  


  ngOnInit() {
  }

  async finalizar() {
    const alert = await this.alertController.create({
      header: 'Estas ayudando al medio ambiente!',
      message: 'Se ha creado el grupo exitosamente, esperando pasajeros !',
      buttons: ['OK'],
    });

    await alert.present();

    this.vehiculo.tarifa='',
    this.vehiculo.capacidad=''
    

  }


}