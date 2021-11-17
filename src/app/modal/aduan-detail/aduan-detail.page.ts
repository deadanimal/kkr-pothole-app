/* eslint-disable @typescript-eslint/dot-notation */
import { AuthService } from 'src/app/shared/services/auth/auth.service';
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

  isAdmin = false;
  map3: any;
  address: string;
  image: string;

  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;
  infoWindow: any;

  constructor(
    private geolocation: Geolocation,
    private authService: AuthService,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {
    const role = this.authService.userRole;
    console.log(role);
    if (role !== 'pengadu') {
      this.isAdmin = true;
    }
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.googleMap();
    this.aduanService
      .getGambarAduan(this.aduan.gambar_id)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.image = res['url'];
      });
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
        this.closeModal('delete');
        loading.dismiss();
      });
  }
  async addMarker() {
    this.myMarker = new google.maps.Marker({
      map: this.map3,
      // animation: google.maps.Animation.DROP,
      position: this.map3.getCenter(),
      draggable: false,
    });

    const content = '<p>' + this.address + '</p>';
    console.log(this.address, this.map3.center.lat());
    await this.addInfoWindow(this.myMarker, content);
  }

  addInfoWindow(marker, content) {
    this.infoWindow = new google.maps.InfoWindow({
      content,
    });
    google.maps.event.addListener(marker, 'click', async () => {
      this.infoWindow.open({
        anchor: marker,
        map: this.map3,
        shouldFocus: false,
      });
      await this.infoWindow.setContent('<p>' + this.address + '</p>');
      console.log(this.address);
    });
  }

  async googleMap() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        const latLng = new google.maps.LatLng(
          this.aduan.latitud,
          this.aduan.langitud
        );
        const mapOptions = {
          center: latLng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          zoomControl: false,
          scaleControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        };
        // this.getAddressFromCoords(this.aduan.latitud, this.aduan.langitud);

        this.map3 = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        this.addMarker();
        loading.dismiss();
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
}
