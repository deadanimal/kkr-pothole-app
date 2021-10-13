import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAduanDetailPageRoutingModule } from './modal-aduan-detail-routing.module';

import { ModalAduanDetailPage } from './modal-aduan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAduanDetailPageRoutingModule
  ],
  declarations: [ModalAduanDetailPage]
})
export class ModalAduanDetailPageModule {}
