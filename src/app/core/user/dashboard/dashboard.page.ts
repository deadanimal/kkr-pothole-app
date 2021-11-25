import { Router } from '@angular/router';
/* eslint-disable no-var */
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { InfoPage } from '../../global/info/info.page';

declare let google;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;
  autocomplete: { input: string };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  infoWindow: any;
  geocoder: any;
  routeAduan: any = '/user/create-aduan/';

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    public zone: NgZone,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.googleMap();
  }

  async getInfo() {
    const modal = await this.modalCtrl.create({
      component: InfoPage,
    });
    modal.present();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  async addMarker() {
    this.myMarker = new google.maps.Marker({
      map: this.map,
      // animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      draggable: false,
    });

    const content = '<p>' + this.address + '</p>';
    console.log(this.address, this.map.center.lat());
    await this.addInfoWindow(this.myMarker, content);
  }

  addInfoWindow(marker, content) {
    this.infoWindow = new google.maps.InfoWindow({
      content,
    });
    google.maps.event.addListener(marker, 'click', async () => {
      this.infoWindow.open({
        anchor: marker,
        map: this.map,
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

        this.getAddressFromCoords(
          resp.coords.latitude,
          resp.coords.longitude,
          ''
        );

        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );

        loading.dismiss();
        this.addMarker();

        this.map.addListener('drag', () => {
          this.myMarker.setPosition(this.map.getCenter());
          this.infoWindow.close();
        });
        this.map.addListener('dragend', () => {
          this.latitude = this.map.center.lat();
          this.longitude = this.map.center.lng();
          this.getAddressFromCoords(
            this.map.center.lat(),
            this.map.center.lng(),
            latLng
          );
          this.routeAduan = '/user/create-aduan/';
          this.routeAduan =
            this.routeAduan + this.latitude + '-' + this.longitude;
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  getAddressFromCoords(lattitude, longitude, lastvalid) {
    this.routeAduan = '/user/create-aduan/';
    this.routeAduan = this.routeAduan + lattitude + '-' + longitude;
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
        var temp = this.address.substr(this.address.length - 8);
        if (temp === 'Malaysia') {
          console.log('true');
        } else {
          this.showConfirm(lastvalid);
        }
        console.log(this.address);
      }
    });
  }

  showConfirm(para) {
    this.alertCtrl
      .create({
        header: 'Caution',
        subHeader: 'Non Malaysia Address Detected',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Current Location',
            handler: () => {
              this.map.panTo(para);
              this.myMarker.setPosition(para);
            },
          },
          {
            text: 'Continue',
            handler: () => {
              console.log('Let me think');
            },
          },
        ],
      })
      .then((res) => {
        res.present();
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
        this.map.setCenter(pos);
        this.myMarker.setPosition(pos);

        this.getAddressFromCoords(
          resp.coords.latitude,
          resp.coords.longitude,
          ''
        );
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults() {
    if (this.autocomplete.input === '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      }
    );
  }

  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item) {
    // this.clearMarkers();
    this.autocompleteItems = [];
    this.geocoder = new google.maps.Geocoder();

    this.geocoder.geocode({ placeId: item.place_id }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const position = {
          lat: results[0].geometry.location.lat,
          lng: results[0].geometry.location.lng,
        };
        this.myMarker.setPosition(results[0].geometry.location);
        // const marker = new google.maps.Marker({
        //   position: results[0].geometry.location,
        //   map: this.map,
        // });
        this.map.setCenter(results[0].geometry.location);
      }
    });
    // alert(JSON.stringify(item));
    // this.placeid = item.place_id;
  }
  clearMarkers() {
    throw new Error('Method not implemented.');
  }

  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete() {
    this.autocompleteItems = [];
    this.autocomplete.input = '';
  }

  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo() {
    return (window.location.href =
      'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' +
      this.placeid);
  }

  routeToAduan() {
    this.router.navigateByUrl(this.routeAduan);
  }

  async logoutConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Pengesahan',
      message: 'Anda pasti untuk log keluar?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Pasti',
          handler: () => {
            console.log('Confirm Okay');
            this.logout();
          },
        },
      ],
    });

    await alert.present();
  }

  async logout() {
    await this.authService.logout();
  }
}
