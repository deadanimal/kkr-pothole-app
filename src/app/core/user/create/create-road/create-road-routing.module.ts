import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRoadPage } from './create-road.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoadPageRoutingModule {}
