import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAduanPage } from './create-aduan.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAduanPage
  }
];

@NgModule({
  imports: [FormsModule,ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAduanPageRoutingModule {}
