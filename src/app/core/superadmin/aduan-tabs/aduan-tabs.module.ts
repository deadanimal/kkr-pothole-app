import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanTabsPageRoutingModule } from './aduan-tabs-routing.module';

import { AduanTabsPage } from './aduan-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanTabsPageRoutingModule
  ],
  declarations: [AduanTabsPage]
})
export class AduanTabsPageModule {}
