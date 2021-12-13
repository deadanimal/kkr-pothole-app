import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { RegisterAdminPage } from 'src/app/auth/register/register-admin/register-admin.page';
import { ModalController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.page.html',
  styleUrls: ['./admin-management.page.scss'],
})
export class AdminManagementPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.backRoute();
    });
  }

  ngOnInit() {}

  backRoute() {
    this.router.navigate(['/superadmin/dashboard']);
  }

  openAdminList() {
    this.router.navigate(['/superadmin/admin-list']);
  }
  openSuperAdminList() {
    this.router.navigate(['/superadmin/superadmin-list']);
  }
  createJalan() {
    this.router.navigate(['/superadmin/create-jalan']);
  }

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
