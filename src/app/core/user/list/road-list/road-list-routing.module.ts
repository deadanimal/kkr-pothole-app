import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoadListPage } from './road-list.page';

const routes: Routes = [
  {
    path: '',
    component: RoadListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadListPageRoutingModule {}
