import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje, DatosService } from 'src/app/services/datos.service';
import { GmapsService } from 'src/app/services/gmaps.service';
// import { ViajesService, Viaje } from 'src/app/services/viajes.service';

interface Ubicacion {
  lat: number;
  lng: number;
  nombre: string;
}

@Component({
  selector: 'app-esperando-pasajero',
  templateUrl: './esperando-pasajero.page.html',
  styleUrls: ['./esperando-pasajero.page.scss'],
})
export class EsperandoPasajeroPage implements OnInit {
  //@ViewChild('inputAutocmplt') inputAutocmplt: ElementRef;
  @ViewChild('map', { static: true }) mapElementRef: ElementRef;
  dataViaje: Viaje = {} as Viaje;
  googleMaps: any;
  directionsService: any;
  directionsRenderer: any;
  center = { lat: -33.5113289, lng: -70.7521038 };
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];
  autocomplete: any;
  destino: Ubicacion;
  sesion: any;
  cargado: boolean;

  constructor(private gmaps: GmapsService,
              private api: DatosService,
              private navController: NavController) { }


  ngOnInit() {
    this.iniciarTodo();
  }

  ngOnDestroy() {
    // this.googleMaps.event.removeAllListeners();
    // if(this.mapClickListener){
    //   this.googleMaps.event.removeListener(this.mapClickListener);
    // };
  }

  async iniciarTodo() {
    this.sesion = JSON.parse(localStorage.getItem('sesion'));
    this.cargado = true;
    await this.traerViaje();
    await this.cargarServicio();
    await this.loadMap();
    this.directionsService = new this.googleMaps.DirectionsService();
    this.directionsRenderer = new this.googleMaps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);
    this.calcularRuta(this.dataViaje);
  }

  async cargarServicio() {
    this.googleMaps = await this.gmaps.loadGoogleMaps();
    console.log('paso1');
  }

  loadMap() {
    try {
      const mapEl = this.mapElementRef.nativeElement;
      const location = new this.googleMaps.LatLng(this.center.lat, this.center.lng);
      const mapconfig = {
        center: location,
        zoom: 17,
        options: {
          disableDefaultUI: true,
          mapTypeId: 'terrain',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off'
                }
              ]
            },
            {
              featureType: 'transit',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off'
                }
              ]
            }
          ]
        }
      };

      this.map = new this.googleMaps.Map(mapEl, mapconfig);
      console.log('paso2');
    } catch (e) {
      console.log(e);
    }
  }

  calcularRuta(viaje: Viaje) {
    this.directionsService.route({
      origin: { lat: -33.5113289, lng: -70.7521038 },
      destination: { lat: viaje.destino.lat, lng: viaje.destino.lng },
      travelMode: this.googleMaps.TravelMode.DRIVING
    }).then((response) => {
      this.directionsRenderer.setDirections(response);
    })
      .catch((e) => window.alert('Directions request failed due to ' + e));
  }

  async traerViaje() {
    this.dataViaje =(await this.api.getViajeActivoConductor(this.sesion.id))[0];
    console.log(this.dataViaje);
    console.log(this.sesion);
  }

  volver() {
    this.api.setEstadoViaje(this.dataViaje.id, 'cancelado');
    this.navController.back();
  }
}
