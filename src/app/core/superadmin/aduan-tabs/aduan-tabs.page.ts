import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-aduan-tabs',
  templateUrl: './aduan-tabs.page.html',
  styleUrls: ['./aduan-tabs.page.scss'],
})
export class AduanTabsPage implements OnInit {
  isSuperAdmin = false;
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform
  ) {
    const role = this.authService.userRole;
    if (role === 'super_admin') {
      this.isSuperAdmin = true;
    } else if (role === 'admin') {
      this.isAdmin = true;
    }

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.backRoute();
    });
  }

  backRoute() {
    if (this.isAdmin) {
      this.router.navigate(['/admin/statistic']);
    } else if (this.isSuperAdmin) {
      this.router.navigate(['/superadmin/statistic']);
    }
  }

  ngOnInit() {}
}
