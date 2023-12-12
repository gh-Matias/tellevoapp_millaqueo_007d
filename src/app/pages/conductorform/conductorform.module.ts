import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorformPageRoutingModule } from './conductorform-routing.module';

import { ConductorformPage } from './conductorform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConductorformPageRoutingModule
  ],
  declarations: [ConductorformPage]
})
export class ConductorformPageModule {}
