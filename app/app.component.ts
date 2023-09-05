import { Component } from '@angular/core';

interface Componente{
  name:string;
  redirecTo: string;
  icon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  componentes : Componente[]=[
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Registrate',
      redirecTo: '/formulario',
      icon: 'log-in-outline'
    },

    {
      name: 'Crear grupo',
      redirecTo: '/crear grupo',
      icon: 'add-circle-outline'
    },
    {
      name: 'unirse al grupo',
      redirecTo: '/unirse',
      icon: 'people-outline'
    },
    
    

  
  ]
  constructor() {}


  ngOnInit(){

  }
  
}
