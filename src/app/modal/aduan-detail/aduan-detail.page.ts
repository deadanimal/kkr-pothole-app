import { take } from 'rxjs/operators';
import { AduanService } from 'src/app/shared/services/aduan.service';
import { CreateAduanPage } from './../../core/user/create/create-aduan/create-aduan.page';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { Aduan } from 'src/app/shared/model/aduan.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare let google;

@Component({
  selector: 'app-aduan-detail',
  templateUrl: './aduan-detail.page.html',
  styleUrls: ['./aduan-detail.page.scss'],
})
export class AduanDetailPage implements OnInit {
  @ViewChild('map3', { static: false }) mapElement: ElementRef;
  @Input() aduan: Aduan;
  map3: any;
  address: string;

  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.googleMap();
  }

  closeModal(role = 'edit') {
    this.modalCtrl.dismiss(this.aduan, role);
  }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: CreateAduanPage,
      componentProps: { aduan: this.aduan },
    });
    await modal.present();

    const { data: updatedAduan } = await modal.onDidDismiss();
    if (updatedAduan) {
      this.aduan = updatedAduan;
    }
  }

  async onDeleteAduan() {
    const loading = await this.loadingCtrl.create({ message: 'Deleting...' });
    loading.present();
    this.aduanService
      .deleteAduan(this.aduan.id)
      .pipe(take(1))
      .subscribe(() => {
        loading.dismiss();
        this.closeModal('delete');
      });
  }

  // 3.0738, 101.5183
  addMarker() {
    this.myMarker = new google.maps.Marker({
      map: this.map3,
      // animation: google.maps.Animation.DROP,
      position: this.map3.getCenter(),
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
      infoWindow.open(this.map3, marker);
    });
  }

  googleMap() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        // this.latitude = resp.coords.latitude;
        // this.longitude = resp.coords.longitude;

        const latLng = new google.maps.LatLng(
          this.aduan.latitud,
          this.aduan.langitud
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

        this.map3 = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        this.addMarker();

        this.map3.addListener('drag', () => {
          this.latitude = this.map3.center.lat();
          this.longitude = this.map3.center.lng();

          this.getAddressFromCoords(this.latitude, this.longitude);
          this.myMarker.setPosition(this.map3.getCenter());
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
        for (const [, value] of Object.entries(result[0])) {
          if (value.length > 0) {
            responseAddress.push(value);
          }
        }
        responseAddress.reverse();
        for (const value of responseAddress) {
          this.address += value + ', ';
        }
        this.address = this.address.slice(0, -2);
        console.log('Address:', this.address);
      })
      .catch(() => {
        this.address = 'Address Not Available!';
      });
  }
}
