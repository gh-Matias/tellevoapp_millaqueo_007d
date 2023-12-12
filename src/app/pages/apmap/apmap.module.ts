import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApmapPageRoutingModule } from './apmap-routing.module';

import { ApmapPage } from './apmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApmapPageRoutingModule
  ],
  declarations: [ApmapPage]
})
export class ApmapPageModule {}
