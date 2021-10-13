import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoadListPageRoutingModule } from './road-list-routing.module';

import { RoadListPage } from './road-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoadListPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [RoadListPage]
})
export class RoadListPageModule {}
