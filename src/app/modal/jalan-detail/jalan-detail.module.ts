import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JalanDetailPageRoutingModule } from './jalan-detail-routing.module';

import { JalanDetailPage } from './jalan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JalanDetailPageRoutingModule
  ],
  declarations: [JalanDetailPage]
})
export class JalanDetailPageModule {}
