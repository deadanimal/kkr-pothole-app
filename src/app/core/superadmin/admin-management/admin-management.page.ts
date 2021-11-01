import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { RegisterAdminPage } from 'src/app/auth/register/register-admin/register-admin.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.page.html',
  styleUrls: ['./admin-management.page.scss'],
})
export class AdminManagementPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async registerAdmin() {
    const modal = await this.modalCtrl.create({
      component: RegisterAdminPage,
    });

    modal.present();
  }

  logout() {
    this.authService.logout();
  }
}
