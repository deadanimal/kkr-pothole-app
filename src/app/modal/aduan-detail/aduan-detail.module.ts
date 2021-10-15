import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanDetailPageRoutingModule } from './aduan-detail-routing.module';

import { AduanDetailPage } from './aduan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanDetailPageRoutingModule
  ],
  declarations: [AduanDetailPage]
})
export class AduanDetailPageModule {}
