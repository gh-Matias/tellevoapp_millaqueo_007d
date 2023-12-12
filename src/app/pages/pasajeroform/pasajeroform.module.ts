import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PasajeroformPageRoutingModule } from './pasajeroform-routing.module';

import { PasajeroformPage } from './pasajeroform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PasajeroformPageRoutingModule
  ],
  declarations: [PasajeroformPage]
})
export class PasajeroformPageModule {}
