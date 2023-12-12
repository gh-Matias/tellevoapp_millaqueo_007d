import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApmapPage } from './apmap.page';

const routes: Routes = [
  {
    path: '',
    component: ApmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApmapPageRoutingModule {}
