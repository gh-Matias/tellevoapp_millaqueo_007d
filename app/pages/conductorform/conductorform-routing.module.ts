import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductorformPage } from './conductorform.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorformPageRoutingModule {}
