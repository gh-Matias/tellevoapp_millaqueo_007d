import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'crear grupo',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule),
    //canActivate: [AutorizadoGuard]
  },
  {
    path: 'unirse',
    loadChildren: () => import('./pages/unirse/unirse.module').then( m => m.UnirsePageModule)
  },
  {
    path: 'ruta',
    loadChildren: () => import('./pages/ruta/ruta.module').then( m => m.RutaPageModule),
    //canActivate: [AutorizadoGuard]
  },
  {
    path: 'saludo',
    loadChildren: () => import('./pages/saludo/saludo.module').then( m => m.SaludoPageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./pages/question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'conductorform',
    loadChildren: () => import('./pages/conductorform/conductorform.module').then( m => m.ConductorformPageModule)
  },
  {
    path: 'googlemap',
    loadChildren: () => import('./googlemap/googlemap.module').then( m => m.GooglemapPageModule)
  },
  {
    path: 'pasajeroform',
    loadChildren: () => import('./pages/pasajeroform/pasajeroform.module').then( m => m.PasajeroformPageModule)
  },
  {
    path: 'perfiles',
    loadChildren: () => import('./pages/perfiles/perfiles.module').then( m => m.PerfilesPageModule)
  },
  {
    path: 'saludo2',
    loadChildren: () => import('./pages/saludo2/saludo2.module').then( m => m.Saludo2PageModule)
  },
  {
    path: 'apmap',
    loadChildren: () => import('./pages/apmap/apmap.module').then( m => m.ApmapPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
