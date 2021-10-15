import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanDetailPage } from './aduan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AduanDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanDetailPageRoutingModule {}
