import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
declare var google:any;
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.page.html',
  styleUrls: ['./ruta.page.scss'],
})

export class RutaPage implements OnInit {
  map=null;
  markers: Marker[] = [
    {
      position: {
        lat: -33.5114181,
        lng: -70.7527658,
      },
      title: 'DuocUC'
    },
    {
      position: {
        lat: -33.5155639,
        lng: -70.7779099,
      },
      title: 'Polideportivo Tinajas'
    },
  ];


  constructor(private router: Router,
    private alertController: AlertController,) { }

  ngOnInit() {
    this.loadMap();
  }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    // create LatLng object
    const myLatLng = {lat: -33.5114181, lng: -70.7527658};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 14
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();   
    });
  }
  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
  async finalizar() {
    const alert = await this.alertController.create({
      header: 'Estas ayudando al medio ambiente!',
      message: 'Se ha creado el grupo exitosamente, esperando pasajeros !',
      buttons: ['OK'],

    });
    this.router.navigateByUrl('/inicio');

    await alert.present();
    

  }

}
