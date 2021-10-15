import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateJalanPageRoutingModule } from './create-jalan-routing.module';

import { CreateJalanPage } from './create-jalan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateJalanPageRoutingModule
  ],
  declarations: [CreateJalanPage]
})
export class CreateJalanPageModule {}
