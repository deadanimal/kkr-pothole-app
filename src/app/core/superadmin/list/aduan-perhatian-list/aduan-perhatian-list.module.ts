import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanPerhatianListPageRoutingModule } from './aduan-perhatian-list-routing.module';

import { AduanPerhatianListPage } from './aduan-perhatian-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanPerhatianListPageRoutingModule
  ],
  declarations: [AduanPerhatianListPage]
})
export class AduanPerhatianListPageModule {}
