import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanPerhatianListPage } from './aduan-perhatian-list.page';

const routes: Routes = [
  {
    path: '',
    component: AduanPerhatianListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanPerhatianListPageRoutingModule {}
