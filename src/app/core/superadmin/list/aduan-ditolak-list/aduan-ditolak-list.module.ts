import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanDitolakListPageRoutingModule } from './aduan-ditolak-list-routing.module';

import { AduanDitolakListPage } from './aduan-ditolak-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanDitolakListPageRoutingModule
  ],
  declarations: [AduanDitolakListPage]
})
export class AduanDitolakListPageModule {}
