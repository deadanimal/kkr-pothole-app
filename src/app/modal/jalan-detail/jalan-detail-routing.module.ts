import { JalanDetailPage } from '../jalan-detail/jalan-detail.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  } from './jalan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: JalanDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JalanDetailPageRoutingModule {}
