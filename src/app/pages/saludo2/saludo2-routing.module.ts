import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Saludo2Page } from './saludo2.page';

const routes: Routes = [
  {
    path: '',
    component: Saludo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Saludo2PageRoutingModule {}
