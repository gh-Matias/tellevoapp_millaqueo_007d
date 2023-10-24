import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
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

  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertController: AlertController) { }
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
      message: 'Te has unido al grupo exitosamente, esperando al conductor!',
      buttons: ['OK'],
    });

    await alert.present();

    this.vehiculo.tarifa='',
    this.vehiculo.capacidad=''
    

  }



}
