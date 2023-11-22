import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsperandoPasajeroPageRoutingModule } from './esperando-pasajero-routing.module';

import { EsperandoPasajeroPage } from './esperando-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsperandoPasajeroPageRoutingModule
  ],
  declarations: [EsperandoPasajeroPage]
})
export class EsperandoPasajeroPageModule {}
