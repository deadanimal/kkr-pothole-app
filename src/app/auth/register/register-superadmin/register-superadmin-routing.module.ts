import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSuperadminPage } from './register-superadmin.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSuperadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSuperadminPageRoutingModule {}
