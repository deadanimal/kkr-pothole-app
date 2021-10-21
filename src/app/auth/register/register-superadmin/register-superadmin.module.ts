import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSuperadminPageRoutingModule } from './register-superadmin-routing.module';

import { RegisterSuperadminPage } from './register-superadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterSuperadminPageRoutingModule,
  ],
  declarations: [RegisterSuperadminPage],
})
export class RegisterSuperadminPageModule {}
