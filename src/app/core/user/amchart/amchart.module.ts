import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmchartPageRoutingModule } from './amchart-routing.module';

import { AmchartPage } from './amchart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmchartPageRoutingModule
  ],
  declarations: [AmchartPage]
})
export class AmchartPageModule {}
