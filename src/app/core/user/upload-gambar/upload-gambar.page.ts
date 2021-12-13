import { UserService } from 'src/app/shared/services/user.service';
import { PhotoService } from './../../../shared/services/photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-upload-gambar',
  templateUrl: './upload-gambar.page.html',
  styleUrls: ['./upload-gambar.page.scss'],
})
export class UploadGambarPage implements OnInit {
  constructor(
    private photoService: PhotoService,
    private authService: AuthService,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/dashboard']);
    });
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
