import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UnirsePageRoutingModule } from './unirse-routing.module';
import { UnirsePage } from './unirse.page';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UnirsePageRoutingModule
  ],
  declarations: [UnirsePage]
})
export class UnirsePageModule {}
