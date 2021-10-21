import { LoadingController, ModalController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../../../shared/services/photo/photo.service';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Jalan } from 'src/app/shared/model/jalan.model';
import { JalanService } from 'src/app/shared/services/jalan.service';

@Component({
  selector: 'app-create-jalan',
  templateUrl: './create-jalan.page.html',
  styleUrls: ['./create-jalan.page.scss'],
})
export class CreateJalanPage implements OnInit {
  @Input() jalan: Jalan;
  isEditMode = false;
  jalanForm: FormGroup;

  map2: any;
  address: string;

  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;

  constructor(
    public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private jalanService: JalanService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // await this.photoService.loadSaved();
    this.initAddJalanForm();
    console.log('jalan data', this.jalanForm.value);
    if (this.jalan) {
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  initAddJalanForm() {
    this.jalanForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      response_party: new FormControl(null, [Validators.required]),
      admin_id: new FormControl(null),
    });
  }

  setFormValues() {
    this.jalanForm.setValue({
      name: this.jalan.name,
      detail: this.jalan.detail,
      status: this.jalan.status,
      start_date: this.jalan.start_date,
      end_date: this.jalan.end_date,
      response_party: this.jalan.response_party,
      admin_id: this.jalan.admin_id,
    });
  }

  async submitJalan() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<Jalan>;
    console.log('JALAN :',this.jalanForm.value);
    if (this.isEditMode) {
      response = this.jalanService.updateJalan(
        this.jalan.id,
        this.jalanForm.value
      );
    } else {
      response = this.jalanService.addJalan(this.jalanForm.value);
    }
    response.pipe(take(1)).subscribe((jalan) => {
      console.log(jalan);
      this.jalanForm.reset();
      loading.dismiss();

      if (this.isEditMode) {
        this.closeModal(jalan);
      }
    });
  }

  closeModal(data = null) {
    this.modalCtrl.dismiss(data);
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
