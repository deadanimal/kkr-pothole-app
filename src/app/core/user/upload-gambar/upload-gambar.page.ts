import { UserService } from 'src/app/shared/services/user.service';
import { PhotoService } from './../../../shared/services/photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-upload-gambar',
  templateUrl: './upload-gambar.page.html',
  styleUrls: ['./upload-gambar.page.scss'],
})
export class UploadGambarPage implements OnInit {
  constructor(private photoService: PhotoService, private authService: AuthService) {}

  ngOnInit() {}

  logout(){
    this.authService.logout();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
