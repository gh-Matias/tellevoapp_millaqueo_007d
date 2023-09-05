import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.page.html',
  styleUrls: ['./ruta.page.scss'],
})
export class RutaPage implements OnInit {

  vehiculo={
    matricula:'',
    marca:'',
    color:'',
    tarifa:'',
    capacidad:''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async finalizar() {
    const alert = await this.alertController.create({
      header: 'Estas ayudando al medio ambiente!',
      message: 'Te has unido al grupo exitosamente, esperando al conductor!',
      buttons: ['OK'],
    });

    await alert.present();

    this.vehiculo.tarifa='',
    this.vehiculo.capacidad=''
    

  }



}
