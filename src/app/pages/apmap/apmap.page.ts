import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  selector: 'app-apmap',
  templateUrl: './apmap.page.html',
  styleUrls: ['./apmap.page.scss'],
})
export class ApmapPage implements OnInit {
  viaje: any = {};
  viajes: any[] = [];

  guardarViaje() {
    // Agregar validaciones según sea necesario
    this.viajes.push({ ...this.viaje });
    this.viaje = {}; // Limpiar el objeto para un nuevo viaje
  }
  map:any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  origin = { lat: -33.5114181, lng: -70.7527658 };
  destination = { lat: -33.5155639, lng: -70.7779099 };


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
      center: this.origin,
      zoom: 12
    });
    this.directionsDisplay.setMap(this.map);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }
  private calculateRoute(){
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response: any, status: string)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('No direccion disponble para: ' + status);
      }
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
