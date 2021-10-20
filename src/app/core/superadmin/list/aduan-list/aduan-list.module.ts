import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanListPageRoutingModule } from './aduan-list-routing.module';

import { AduanListPage } from './aduan-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanListPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [AduanListPage]
})
export class AduanListPageModule {}
