import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
//menu anvorguesa// 



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private menuController:MenuController,
    private alertController: AlertController) {}

  async cerrarSesion() {
    // Elimina los datos de la sesión del sessionStorage
    
    const alert = await this.alertController.create({
      header: 'Mensaje!',
      message: 'Se ha cerrado su sesión exitosamente, vuelva pronto !',
      buttons: ['OK'],

    })
    sessionStorage.clear()
    await alert.present();
    ;}
  

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

}
