import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadGambarPage } from './upload-gambar.page';

const routes: Routes = [
  {
    path: '',
    component: UploadGambarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadGambarPageRoutingModule {}
