import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminListPage } from './superadmin-list.page';

const routes: Routes = [
  {
    path: '',
    component: SuperadminListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminListPageRoutingModule {}
