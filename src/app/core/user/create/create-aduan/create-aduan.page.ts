/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { SuccessPage } from './../../../global/alert/success/success.page';
import { Router } from '@angular/router';
import {
  LoadingController,
  ModalController,
  Platform,
  ToastController,
} from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../../../shared/services/photo/photo.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AduanService } from 'src/app/shared/services/aduan.service';
import { finalize, take } from 'rxjs/operators';
import { Aduan } from 'src/app/shared/model/aduan.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filesystem } from '@capacitor/filesystem';
import { Photo } from '@capacitor/camera';

declare let google;

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-create-aduan',
  templateUrl: './create-aduan.page.html',
  styleUrls: ['./create-aduan.page.scss'],
})
export class CreateAduanPage implements OnInit {
  @ViewChild('map2', { static: false }) mapElement: ElementRef;
  @Input() aduan: Aduan;
  isEditMode = false;
  aduanForm: FormGroup;

  map2: any;
  address: string;
  /* Variabe to store file data */
  images: LocalFile[];
  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;
  infoWindow: any;

  constructor(
    public photoService: PhotoService,
    private geolocation: Geolocation,
    private formBuilder: FormBuilder,
    private aduanService: AduanService,
    private modalCtrl: ModalController,
    private router: Router,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private plt: Platform
  ) {}

  ngOnInit() {
    // await this.photoService.loadSaved();
    this.initAddAduanForm();
    console.log('aduan data', this.aduanForm.value);
    if (this.aduan) {
      this.isEditMode = true;
      this.setFormValues();
    }

    this.images = [];
  }

  initAddAduanForm() {
    this.aduanForm = this.formBuilder.group({
      title: new FormControl('Jalan Berlubang', [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
      gambar_id: new FormControl(null),
      pengadu_id: new FormControl(null),
      latitud: new FormControl(this.latitude),
      langitud: new FormControl(this.latitude),
      image: new FormControl(null, [Validators.required])
    });
  }

  setFormValues() {
    this.aduanForm.setValue({
      title: this.aduan.title,
      detail: this.aduan.detail,
      gambar_id: this.aduan.gambar_id,
      pengadu_id: this.aduan.pengadu_id,
      latitud: this.aduan.latitud,
      langitud: this.aduan.langitud,
    });
  }

  setLatLng() {
    this.aduanForm.patchValue({
      latitud: this.latitude,
      langitud: this.longitude,
    });
  }

  // Convert the base64 to blob data
  // and create  formData with it
  async fileEvent(e) {
    const files = e.target.files;
    const file = files[0];
    const filePath = files[0].size;
    const base64Data = await this.readAsBase64(file);

    const fileName = new Date().getTime() + '.jpeg';

    this.images.push({
      name: fileName,
      path: filePath,
      data: `${base64Data}`,
    });

    console.log(this.images);
  }

  // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
  private async readAsBase64(blob) {
    // Fetch the photo, read as a blob, then convert to base64 format
    // const response = await fetch(photo.webPath);
    // const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  // Upload the formData to our API
  async uploadData(formData) {
    const loading = await this.loadingCtrl.create({
      message: 'Uploading image...',
    });
    await loading.present();
  }

  async submitAduan() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    const modal = await this.modalCtrl.create({
      component: SuccessPage,
      componentProps: {
        title: 'Daftar Aduan',
        message:
          'Daftar Aduan telah BERJAYA, Sila semak aduan anda di Laman Status Aduan',
      },
    });
    loading.present();

    let response: Observable<Aduan>;

    this.setLatLng();
    if (this.isEditMode) {
      response = this.aduanService.updateAduan(
        this.aduan.id,
        this.aduanForm.value
      );
    } else {
      const formData = new FormData();
      formData.append('img', this.images[0].data);
      formData.append('filename', this.images[0].name);
      const url = 'http://127.0.0.1:8000/api/upload_image';
      const header = new HttpHeaders({
        'Content-Type':
          'application/form-data; charset=UTF-8, application/json',
      });

      console.log('Data: ', formData, { headers: header });

      this.http
        .post(url, formData)
        .pipe(
          finalize(() => {
            loading.dismiss();
          })
        )
        .subscribe((res) => {
          console.log(res);
          if (res['success']) {
            this.presentToast('File upload complete.');
            const img_id = res['gambar_id'];
            this.aduanForm.patchValue({ gambar_id: img_id });
            response = this.aduanService.addAduan(this.aduanForm.value);

            response.pipe(take(1)).subscribe((aduan) => {
              console.log(aduan);
              this.aduanForm.reset();
              loading.dismiss();
              if (this.isEditMode) {
                this.closeModal(aduan);
              }
              this.router.navigateByUrl('/user/dashboard', {
                replaceUrl: true,
              });
              modal.present();
            });
          } else {
            this.presentToast('File upload failed.');
          }
        });
    }
  }

  closeModal(data = null) {
    this.modalCtrl.dismiss(data);
  }

  ionViewWillEnter() {
    this.googleMap();
  }

  // ============  GOOGLE MAPS =============
  async addMarker() {
    this.myMarker = new google.maps.Marker({
      map: this.map2,
      // animation: google.maps.Animation.DROP,
      position: this.map2.getCenter(),
      draggable: false,
    });

    const content = '<p>' + this.address + '</p>';
    console.log(this.address, this.map2.center.lat());
    await this.addInfoWindow(this.myMarker, content);
  }

  addInfoWindow(marker, content) {
    this.infoWindow = new google.maps.InfoWindow({
      content,
    });
    google.maps.event.addListener(marker, 'click', async () => {
      this.infoWindow.open({
        anchor: marker,
        map: this.map2,
        shouldFocus: false,
      });
      await this.infoWindow.setContent('<p>' + this.address + '</p>');
      console.log(this.address);
    });
  }

  googleMap() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        const latLng = new google.maps.LatLng(
          resp.coords.latitude,
          resp.coords.longitude
        );
        const mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          zoomControl: false,
          scaleControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        };

        this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

        this.map2 = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        this.addMarker();

        this.map2.addListener('drag', () => {
          this.latitude = this.map2.center.lat();
          this.longitude = this.map2.center.lng();
          this.myMarker.setPosition(this.map2.getCenter());
          this.infoWindow.close();
        });
        this.map2.addListener('dragend', () => {
          this.getAddressFromCoords(
            this.map2.center.lat(),
            this.map2.center.lng()
          );
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log('getAddressFromCoords :' + lattitude + ',' + longitude);
    const latlng = new google.maps.LatLng(lattitude, longitude);
    // This is making the Geocode request
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ latLng: latlng }, (results, status) => {
      if (status !== google.maps.GeocoderStatus.OK) {
        alert(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status === google.maps.GeocoderStatus.OK) {
        this.address = results[0].formatted_address;
        console.log(this.address);
      }
    });
  }

  getCurrentCoords() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        const pos = {
          zoom: 14,
          lat: resp.coords.latitude,
          lng: resp.coords.longitude,
        };

        const content = '<p>' + this.address + '</p>';
        this.infoWindow.setContent(content);
        this.map2.setCenter(pos);
        this.myMarker.setPosition(pos);

        this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }
}
