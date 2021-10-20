import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperadminListPageRoutingModule } from './superadmin-list-routing.module';

import { SuperadminListPage } from './superadmin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperadminListPageRoutingModule
  ],
  declarations: [SuperadminListPage]
})
export class SuperadminListPageModule {}
