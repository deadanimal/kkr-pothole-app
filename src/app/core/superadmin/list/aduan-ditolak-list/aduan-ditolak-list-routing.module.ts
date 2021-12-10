import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanDitolakListPage } from './aduan-ditolak-list.page';

const routes: Routes = [
  {
    path: '',
    component: AduanDitolakListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanDitolakListPageRoutingModule {}
