import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglemapPage } from './googlemap.page';

const routes: Routes = [
  {
    path: '',
    component: GooglemapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega esta línea
})
export class GooglemapPageRoutingModule {}
