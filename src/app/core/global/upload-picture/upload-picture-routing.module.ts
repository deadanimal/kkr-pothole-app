import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadPicturePage } from './upload-picture.page';

const routes: Routes = [
  {
    path: '',
    component: UploadPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadPicturePageRoutingModule {}
