import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
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
import { take } from 'rxjs/operators';
import { Aduan } from 'src/app/shared/model/aduan.model';
import { Observable } from 'rxjs';

declare let google;

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
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    // await this.photoService.loadSaved();
    this.initAddAduanForm();
    console.log('aduan data', this.aduanForm.value);
    if (this.aduan) {
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  initAddAduanForm() {
    this.aduanForm = this.formBuilder.group({
      title: new FormControl('Jalan Berlubang', [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
      gambar_id: new FormControl(null),
      pengadu_id: new FormControl(null),
      latitud: new FormControl(this.latitude),
      langitud: new FormControl(this.latitude),
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

  async submitAduan() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<Aduan>;

    this.setLatLng();
    if (this.isEditMode) {
      response = this.aduanService.updateAduan(
        this.aduan.id,
        this.aduanForm.value
      );
    } else {
      response = this.aduanService.addAduan(this.aduanForm.value);
    }
    response.pipe(take(1)).subscribe((aduan) => {
      console.log(aduan);
      this.aduanForm.reset();
      loading.dismiss();
      if (this.isEditMode) {
        this.closeModal(aduan);
      }
      this.router.navigateByUrl('/upload-gambar', { replaceUrl: true });
    });
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
}
