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
import * as L from 'leaflet';

const iconRetinaUrl = './assets/marker-icon-2x.png';
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@ionic-native/native-geocoder/ngx';
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
  // map;
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
      // specify the path here
      iconUrl,
      shadowUrl,
    }),
  };
  myMarker: any;
  center: any;

  constructor(
    public photoService: PhotoService,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private formBuilder: FormBuilder,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // await this.photoService.loadSaved();
    this.initAddAduanForm();
    if (this.aduan) {
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  initAddAduanForm() {
    this.aduanForm = new FormGroup({
      tajuk: new FormControl(null, [Validators.required]),
      keterangan: new FormControl(null, [Validators.required]),
      gambar_id: new FormControl(null),
      kategori_jalan: new FormControl(null, [Validators.required]),
      negeri: new FormControl(null, [Validators.required]),
      pengadu_id: new FormControl(null),
    });
  }

  setFormValues() {
    this.aduanForm.setValue({
      tajuk: this.aduan.tajuk,
      keterangan: this.aduan.keterangan,
      gambar_id: this.aduan.gambar_id,
      kategori_jalan: this.aduan.kategori_jalan,
      negeri: this.aduan.negeri,
      pengadu_id: this.aduan.pengadu_id,
    });
  }

  async submitAduan() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    // loading.present();

    let response: Observable<Aduan>;
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
    });
  }

  closeModal(data = null) {
    this.modalCtrl.dismiss(data);
  }

  ionViewWillEnter() {
    this.googleMap();
  }
  // 3.0738, 101.5183
  addMarker() {
    this.myMarker = new google.maps.Marker({
      map: this.map2,
      // animation: google.maps.Animation.DROP,
      position: this.map2.getCenter(),
      draggable: true,
    });

    const content = '<h4>Information!</h4>';

    this.addInfoWindow(this.myMarker, content);
  }
  addInfoWindow(marker, content) {
    const infoWindow = new google.maps.InfoWindow({
      content,
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map2, marker);
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
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.LEFT_TOP,
          },
          zoomControl: false,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP,
          },
          scaleControl: false,
          streetViewControl: false,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP,
          },
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

          this.getAddressFromCoords(
            this.map2.center.lat(),
            this.map2.center.lng()
          );
          this.myMarker.setPosition(this.map2.getCenter());
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log('getAddressFromCoords :' + lattitude + ',' + longitude);
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };

    this.nativeGeocoder
      .reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = '';
        const responseAddress = [];
        for (const [key, value] of Object.entries(result[0])) {
          if (value.length > 0) {
            responseAddress.push(value);
          }
        }
        responseAddress.reverse();
        for (const value of responseAddress) {
          this.address += value + ', ';
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = 'Address Not Available!';
      });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
