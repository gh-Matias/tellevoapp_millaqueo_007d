import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasajeroformPage } from './pasajeroform.page';

const routes: Routes = [
  {
    path: '',
    component: PasajeroformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasajeroformPageRoutingModule {}
