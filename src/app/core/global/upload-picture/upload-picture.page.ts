import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../shared/services/photo/photo.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.page.html',
  styleUrls: ['./upload-picture.page.scss'],
})
export class UploadPicturePage implements OnInit {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
