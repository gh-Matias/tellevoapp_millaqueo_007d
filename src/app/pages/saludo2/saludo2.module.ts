import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Saludo2PageRoutingModule } from './saludo2-routing.module';
import { Saludo2Page } from './saludo2.page';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Saludo2PageRoutingModule
  ],
  declarations: [Saludo2Page]
})
export class Saludo2PageModule {}
