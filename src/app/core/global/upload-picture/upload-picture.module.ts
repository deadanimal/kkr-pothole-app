import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPicturePageRoutingModule } from './upload-picture-routing.module';

import { UploadPicturePage } from './upload-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPicturePageRoutingModule
  ],
  declarations: [UploadPicturePage]
})
export class UploadPicturePageModule {}
