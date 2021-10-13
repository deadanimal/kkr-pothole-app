import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAduanDetailPage } from './modal-aduan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAduanDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAduanDetailPageRoutingModule {}
