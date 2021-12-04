/* eslint-disable prefer-const */
/* eslint-disable no-var */
import { InfoPage } from './../../../global/info/info.page';
/* eslint-disable @typescript-eslint/no-shadow */
import { UserService } from 'src/app/shared/services/user.service';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { SuccessPage } from './../../../global/alert/success/success.page';
import { ActivatedRoute, Router } from '@angular/router';
import {
  LoadingController,
  ModalController,
  Platform,
  ToastController,
  AlertController,
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
import { Storage } from '@capacitor/storage';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AduanService } from 'src/app/shared/services/aduan.service';
import { debounce, finalize, take } from 'rxjs/operators';
import { Aduan } from 'src/app/shared/model/aduan.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filesystem } from '@capacitor/filesystem';
import { Photo } from '@capacitor/camera';

declare let google;

const TOKEN_KEY = 'my-token';

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

  nama_jalan: string;
  map2: any;
  address: string;
  /* Variabe to store file data */
  images: LocalFile[];
  imgfile: any;
  load: any;
  resp: any;

  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;
  infoWindow: any;
  Overlays: any = [];
  iw: any;
  road_type: any;
  location: any;

  constructor(
    public photoService: PhotoService,
    private geolocation: Geolocation,
    private formBuilder: FormBuilder,
    private aduanService: AduanService,
    private userService: UserService,
    private modalCtrl: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private plt: Platform,
    public alertController: AlertController
  ) {
    this.plt.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/user/dashboard']);
    });
  }

  async ngOnInit() {
    this.location = this.route.snapshot.params['location'].split('-');
    console.log('aik', this.location);
    this.initAddAduanForm();

    this.loadUserId();
    console.log('aduan data', this.aduanForm.value);
    if (this.aduan) {
      this.isEditMode = true;
      this.setFormValues();
    }
    this.images = [];
  }

  async loadUserId() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    const token = await Storage.get({ key: TOKEN_KEY });
    console.log('Token:', token.value);

    const body = {
      bearer_token: token.value,
    };

    this.userService.getAuthUser(body).subscribe(
      (res) => {
        console.log(res);
        loading.dismiss();
        this.aduanForm.patchValue({
          pengadu_id: res.id,
        });
        console.log('this user id', res.id, res.role);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  initAddAduanForm() {
    this.aduanForm = this.formBuilder.group({
      title: new FormControl('Jalan Berlubang', [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
      address: new FormControl(null),
      nama_jalan: new FormControl(null, [Validators.required]),
      response_party: new FormControl(null, [Validators.required]),
      gambar_id: new FormControl(null),
      pengadu_id: new FormControl(null, [Validators.required]),
      latitud: new FormControl(this.latitude),
      langitud: new FormControl(this.longitude),
      image: new FormControl(null, [Validators.required]),
      pbt_code: new FormControl(null, [Validators.required]),
      complaint_category: new FormControl(null),
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
      latitud: this.map2.center.lat(),
      langitud: this.map2.center.lng(),
    });
  }

  // Convert the base64 to blob data
  // and create  formData with it
  url: any = 'assets/img/no_image.png';
  async fileEvent(event) {
    const files = event.target.files;
    const file = files[0];
    this.imgfile = file;
    const filePath = files[0].size;
    const base64Data = await this.readAsBase64(file);

    const fileName = new Date().getTime() + '.jpeg';

    if (files && files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }

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
      formData.append('file', this.imgfile);
      console.log(formData);
      const url = `${this.aduanService.apiUrl}/upload_image`;
      const header = new HttpHeaders({
        'Content-Type':
          'application/form-data; charset=UTF-8, application/json',
      });

      console.log('Data: ', formData, { headers: header });
      console.log(this.aduanForm.value);

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
            this.presentToast('Gambar berjaya dimuat naik.');
            const img_id = res['gambar_id'];
            this.aduanForm.patchValue({ gambar_id: img_id });
            response = this.aduanService.addAduan(this.aduanForm.value);

            response.pipe(take(1)).subscribe((aduan) => {
              if (aduan['success']) {
                console.log('ADUAN SAVED',aduan);
                this.aduanForm.reset();
                this.router.navigateByUrl('/user/aduan-list', {
                  replaceUrl: true,
                });
                modal.present();
                if (this.imgfile !== null) {
                  const header = new HttpHeaders({
                    // 'Content-Type': 'multipart/form-data',
                    Authorization: 'BPA-KKR-API-TEST',
                  });
                  const formData = new FormData();
                  formData.append('sispaa_id', aduan[0]['sispaa_id']);
                  formData.append('attachment', this.imgfile);

                  this.http
                    .post(
                      'https://gateway.spab.gov.my/aduan-api/v1/attach/',
                      formData,
                      { headers: header }
                    )
                    .subscribe((res) => {
                      console.log('ATTACH SISPAA', res, formData);
                    });
                }
              } else {
                this.presentToast('Aduan tidak berjaya dihantar');
              }
              loading.dismiss();
              if (this.isEditMode) {
                this.closeModal(aduan);
              }
            });
          } else {
            this.presentToast('Gambar gagal dimuat naik.');
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

  async googleMap() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        const latLng = new google.maps.LatLng(
          this.location[0],
          this.location[1]
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

        this.map2 = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        loading.dismiss();
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
            this.map2.center.lng(),
            latLng
          );
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  async getOverlayImage(bounds) {
    this.clearMyGosData();
    this.load = await this.loadingCtrl.create({ message: 'Loading ...' });
    this.load.present();

    const mygosBaseURL = 'https://mygos.mygeoportal.gov.my';
    const mygosMapServer =
      '/gisserver/rest/services/Fundamental_GDC/Transportation_SemenanjungMsia/MapServer';
    // see https://developers.arcgis.com/rest/services-reference/enterprise/query-map-service-layer-.htm
    const mygosMapServiceURL = new URL(
      mygosBaseURL + mygosMapServer + '/export'
    );
    // see https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer-.htm
    const mygosFeatureServiceURL = new URL(
      mygosBaseURL + mygosMapServer + '/9/query'
    );
    const mygosFeatureServiceURL1 = new URL(
      mygosBaseURL + mygosMapServer + '/10/query'
    );
    const mygosFeatureServiceURL2 = new URL(
      mygosBaseURL + mygosMapServer + '/11/query'
    );
    const mygosFeatureServiceURL3 = new URL(
      mygosBaseURL + mygosMapServer + '/12/query'
    );
    const mygosFeatureServiceURL4 = new URL(
      mygosBaseURL + mygosMapServer + '/13/query'
    );
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    console.log('BOUND APA NI', ne, sw);
    const sr = 4326; // Spatial Reference

    const exportBBOX =
      sw.lng() + ',' + sw.lat() + ',' + ne.lng() + ',' + ne.lat();
    const mapdiv = this.map2.getDiv();
    mygosMapServiceURL.search = new URLSearchParams({
      bbox: exportBBOX,
      format: 'png',
      transparent: 'true',
      f: 'image',
      bboxSR: sr.toString(),
      imageSR: sr.toString(),
      size: mapdiv.offsetWidth + ',' + mapdiv.offsetHeight,
      layers: 'show:10',
    }).toString();

    // Delete by remove all overlay in overlays array.
    while (this.Overlays[0]) {
      this.Overlays.pop().setMap(null);
    }

    const Overlay = new google.maps.GroundOverlay(
      mygosMapServiceURL.toString(),
      bounds,
      { map: this.map2, opacity: 0.9 }
    );

    // Push new overlay into overlays array
    this.Overlays.push(Overlay);
    const metersPerPx =
      (156543.03392 * Math.cos((sw.lat() * Math.PI) / 180)) /
      Math.pow(2, this.map2.getZoom());
    const queryURL = new URL(mygosFeatureServiceURL.toString());
    const queryURL1 = new URL(mygosFeatureServiceURL1.toString());
    const queryURL2 = new URL(mygosFeatureServiceURL2.toString());
    const queryURL3 = new URL(mygosFeatureServiceURL3.toString());
    const queryURL4 = new URL(mygosFeatureServiceURL4.toString());
    const bodyRoad = {
      where: '1=1',
      geometry:
        '{"x": ' +
        this.map2.getCenter().lng() +
        ', "y":' +
        this.map2.getCenter().lat() +
        ', "spatialReference":{"wkid":4326}}',
      geometryType: 'esriGeometryPoint',
      inSR: sr.toString(),
      spatialRel: 'esriSpatialRelIntersects',
      outFields: '*',
      distance: (4 * metersPerPx).toString(), // 4 pixels, distance from click to nearest feature
      units: 'esriSRUnit_Meter',
      returnGeometry: 'false',
      resultRecordCount: '1',
      returnExtentOnly: 'false',
      featureEncoding: 'esriDefault',
      f: 'pjson',
    };
    queryURL.search = new URLSearchParams(bodyRoad).toString();
    queryURL1.search = new URLSearchParams(bodyRoad).toString();
    queryURL2.search = new URLSearchParams(bodyRoad).toString();
    queryURL3.search = new URLSearchParams(bodyRoad).toString();
    queryURL4.search = new URLSearchParams(bodyRoad).toString();

    fetch(queryURL.toString())
      .then((r) => r.json())
      .then((r) => {
        if (r.features[0]) {
          this.addIW(this.map2.getCenter(), r);
          console.log('masuk1', r);
        } else {
          fetch(queryURL1.toString())
            .then((r) => r.json())
            .then((r) => {
              if (r.features[0]) {
                this.addIW(this.map2.getCenter(), r);
                console.log('masuk2', r);
              } else {
                fetch(queryURL2.toString())
                  .then((r) => r.json())
                  .then((r) => {
                    if (r.features[0]) {
                      this.addIW(this.map2.getCenter(), r);
                      console.log('masuk3', r);
                    } else {
                      fetch(queryURL3.toString())
                        .then((r) => r.json())
                        .then((r) => {
                          if (r.features[0]) {
                            this.addIW(this.map2.getCenter(), r);
                            console.log('masuk4', r);
                          } else {
                            fetch(queryURL4.toString())
                              .then((r) => r.json())
                              .then((r) => {
                                if (r.features[0]) {
                                  this.addIW(this.map2.getCenter(), r);
                                  console.log('masuk5', r);
                                } else {
                                  this.aduanForm.patchValue({
                                    complaint_category: '99',
                                    nama_jalan: 'KKR',
                                    response_party: 'Kementerian Kerja Raya',
                                    pbt_code: 'KKR',
                                  });

                                  console.log(
                                    'maklumat tiada',
                                    this.aduanForm.value
                                  );

                                  this.load.dismiss();
                                }
                              });
                          }
                        });
                    }
                  });
              }
            });
        }
      });
  }

  async addIW(loc, d) {
    if (d.features[0] && d.features[0].attributes.length !== 0) {
      console.log('masuk sini pulakkk');
      const val = d.features[0].attributes;
      const roadname = val['NAM'] === null ? '' : val['NAM'];
      const authority =
        val['AUT'] === ' ' ? 'Kementerian Kerja Raya' : val['AUT'];
      const roadcat = val['RDC'] === null ? '' : val['RDC'];

      if (roadcat === 1) {
        this.road_type = 'Lebuhraya';
      } else if (roadcat === 2) {
        this.road_type = 'Jalan Persekutuan';
      } else if (roadcat === 3) {
        this.road_type = 'Jalan Negeri';
      } else if (roadcat === 4) {
        this.road_type = 'Jalan Pihak Berkuasa Tempatan (PBT)';
      } else if (roadcat === 99) {
        this.road_type = 'Lain-lain';
      }

      const body = { pbt_nama: authority };
      console.log(body);

      this.aduanService.getPBTCode(body).subscribe((res) => {
        console.log('KOD res: ', res);
        const kod = res['kod'];
        if (kod === 'LLM') {
          this.aduanForm.patchValue({
            complaint_category: roadcat,
            nama_jalan: roadname,
            response_party: 'Lembaga Lebuhraya',
            pbt_code: kod,
          });
        } else {
          this.aduanForm.patchValue({
            complaint_category: roadcat,
            nama_jalan: roadname,
            response_party: authority,
            pbt_code: kod,
          });
        }
        this.load.dismiss();
        console.log(this.aduanForm.value);
        return res;
      });
    }

    this.load.dismiss();
  }

  clearMyGosData() {
    this.aduanForm.patchValue({
      complaint_category: '',
      nama_jalan: '',
      response_party: '',
      pbt_code: '',
    });
    console.log('clear data');
  }

  getAddressFromCoords(lattitude, longitude, lastvalid) {
    console.log('get AddressFromCoords :' + lattitude + ',' + longitude);
    const latlng = new google.maps.LatLng(lattitude, longitude);
    // This is making the Geocode request
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ latLng: latlng }, (results, status) => {
      if (status !== google.maps.GeocoderStatus.OK) {
        console.log(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status === google.maps.GeocoderStatus.OK) {
        this.address = results[0].formatted_address;
        var temp = this.address.substr(this.address.length - 8);
        if (temp === 'Malaysia') {
          this.aduanForm.patchValue({
            address: this.address,
          });
          this.getOverlayImage(this.map2.getBounds());
        } else {
          this.showConfirm(lastvalid);
        }

        console.log(this.address);
      }
    });
  }

  showConfirm(para) {
    this.alertController
      .create({
        header: 'Caution',
        subHeader: 'Non Malaysia Address Detected',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Current Location',
            handler: () => {
              this.map2.panTo(para);
              this.myMarker.setPosition(para);
            },
          },
          {
            text: 'Continue',
            handler: () => {
              this.aduanForm.patchValue({
                address: this.address,
              });
              this.getOverlayImage(this.map2.getBounds());
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
        this.map2.setCenter(pos);
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

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 2000,
    });
    toast.present();
  }

  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }
}
