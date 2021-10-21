import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JalanListPageRoutingModule } from './jalan-list-routing.module';

import { JalanListPage } from './jalan-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JalanListPageRoutingModule
  ],
  declarations: [JalanListPage]
})
export class JalanListPageModule {}
