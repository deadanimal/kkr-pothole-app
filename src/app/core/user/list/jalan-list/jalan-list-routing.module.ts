import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JalanListPage } from './jalan-list.page';

const routes: Routes = [
  {
    path: '',
    component: JalanListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JalanListPageRoutingModule {}
