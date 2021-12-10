import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanSelesaiListPage } from './aduan-selesai-list.page';

const routes: Routes = [
  {
    path: '',
    component: AduanSelesaiListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanSelesaiListPageRoutingModule {}
