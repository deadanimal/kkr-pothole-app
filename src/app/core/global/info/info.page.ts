import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
