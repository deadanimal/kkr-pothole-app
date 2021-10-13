import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmchartPage } from './amchart.page';

const routes: Routes = [
  {
    path: '',
    component: AmchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmchartPageRoutingModule {}
