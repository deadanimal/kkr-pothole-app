import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CreateJalanPage } from './create-jalan.page';

const routes: Routes = [
  {
    path: '',
    component: CreateJalanPage,
  },
];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateJalanPageRoutingModule {}
