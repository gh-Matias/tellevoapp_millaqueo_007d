import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { IPalabra } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public mensaje: string; 
  nombre: any;

  data={
    texto:''
  }

  newPalabra: IPalabra={
    palabra:'',
    username:''
  }
  //npm install -D @types/qrcode --save

  constructor(private apicrud: ApiCrudService, 
              private alertcontroller: AlertController) {
    this.mensaje = 'Hola Mundo';
   }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username'); 
  }

  generarQr(){
    this.mensaje = this.data.texto;
    this.newPalabra.username=this.nombre;
    this.newPalabra.palabra=this.mensaje;
    this.apicrud.CrearPalabra(this.newPalabra).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
  }


  async mostrarMensaje(){
    const alerta= await this.alertcontroller.create({ 
      header:'Palabra Creada',
      message: 'Su Qr ha sido almacenado',
      buttons: ['Ok']
    });
    alerta.present();
  }

}
