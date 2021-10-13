import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAduanPageRoutingModule } from './create-aduan-routing.module';

import { CreateAduanPage } from './create-aduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateAduanPageRoutingModule
  ],
  declarations: [CreateAduanPage]
})
export class CreateAduanPageModule {}
