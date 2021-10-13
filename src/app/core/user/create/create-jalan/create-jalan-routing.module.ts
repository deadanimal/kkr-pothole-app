import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateJalanPage } from './create-jalan.page';

const routes: Routes = [
  {
    path: '',
    component: CreateJalanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateJalanPageRoutingModule {}
