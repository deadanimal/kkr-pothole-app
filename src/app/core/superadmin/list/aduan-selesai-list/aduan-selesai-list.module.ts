import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanSelesaiListPageRoutingModule } from './aduan-selesai-list-routing.module';

import { AduanSelesaiListPage } from './aduan-selesai-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanSelesaiListPageRoutingModule
  ],
  declarations: [AduanSelesaiListPage]
})
export class AduanSelesaiListPageModule {}
