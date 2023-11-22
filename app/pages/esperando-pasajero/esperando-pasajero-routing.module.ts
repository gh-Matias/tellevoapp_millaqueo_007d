import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsperandoPasajeroPage } from './esperando-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: EsperandoPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsperandoPasajeroPageRoutingModule {}
