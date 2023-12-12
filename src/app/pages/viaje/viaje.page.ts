import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage {

  vehiculo1={
    matricula:'',
    marca:'',
    color:'',
    tarifa:'',
    capacidad:''
  }

  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertController: AlertController,) {
    
   }
  

    cerrarSesion() {
      // Elimina los datos de la sesión del sessionStorage
      sessionStorage.clear(); 
  
      // Redirige al inicio de nvo
      this.router.navigateByUrl('/inicio');
    }
  


  ngOnInit() {
    
  }

  async finalizar() {
    const alert = await this.alertController.create({
      header: 'Estas ayudando al medio ambiente!',
      message: 'Se ha creado el grupo exitosamente, esperando pasajeros !',
      buttons: ['OK'],

    });
    this.router.navigateByUrl('/inicio');

    await alert.present();

    this.vehiculo1.tarifa='',
    this.vehiculo1.capacidad=''
    

  }


}