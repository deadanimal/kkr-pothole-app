import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadGambarPageRoutingModule } from './upload-gambar-routing.module';

import { UploadGambarPage } from './upload-gambar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadGambarPageRoutingModule
  ],
  declarations: [UploadGambarPage]
})
export class UploadGambarPageModule {}
