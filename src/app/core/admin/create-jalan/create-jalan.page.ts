import { ToastController } from '@ionic/angular';
/* eslint-disable prefer-const */
import { UserService } from './../../../shared/services/user.service';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Daerah } from './../../../shared/model/daerah.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
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

import { finalize, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Jalan } from 'src/app/shared/model/jalan.model';
import { JalanService } from 'src/app/shared/services/jalan.service';
import { Negeri } from 'src/app/shared/model/negeri.model';
import { Storage } from '@capacitor/storage';
import { environment } from 'src/environments/environment';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-create-jalan',
  templateUrl: './create-jalan.page.html',
  styleUrls: ['./create-jalan.page.scss'],
})
export class CreateJalanPage implements OnInit {
  @Input() jalan: Jalan;
  daerahs: Observable<Daerah[]>;
  negeris: Observable<Negeri[]>;
  isEditMode = false;
  jalanForm: FormGroup;
  images: LocalFile[];

  map2: any;
  address: string;

  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;
  res_party: any;

  apiUrl = environment.baseUrl;

  constructor(
    public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private jalanService: JalanService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient,
    private toastCtrl: ToastController
  ) {}

  async ngOnInit() {
    this.images = [];
    this.initAddJalanForm();
    this.loadUserId();
    console.log('jalan data', this.jalanForm.value);
    if (this.jalan) {
      this.isEditMode = true;
      this.setFormValues();
    }

    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    // loading.present();

    this.negeris = this.jalanService.getNegeris().pipe(
      tap((negeri) => {
        loading.dismiss();
        console.log('Daerah:', negeri);
        return negeri;
      })
    );
  }

  async loadUserId() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    const token = await Storage.get({ key: TOKEN_KEY });
    console.log('Token:', token.value);

    let body = {
      bearer_token: token.value,
    };

    this.userService.getAuthUser(body).subscribe(
      (res) => {
        console.log(res);
        loading.dismiss();
        this.jalanForm.patchValue({
          admin_id: res.id,
        });
        console.log('this user id', res.id, res.role);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  initAddJalanForm() {
    this.jalanForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      negeri: new FormControl(null, [Validators.required]),
      daerah: new FormControl(null, [Validators.required]),
      response_party: new FormControl(null, [Validators.required]),
      admin_id: new FormControl(null),
      image: new FormControl(null, [Validators.required]),
      gambar_id: new FormControl(null),
    });
  }

  setFormValues() {
    this.jalanForm.setValue({
      name: this.jalan.name,
      detail: this.jalan.detail,
      status: this.jalan.status,
      start_date: this.jalan.start_date,
      end_date: this.jalan.end_date,
      negeri: this.jalan.negeri,
      daerah: this.jalan.daerah,
      response_party: this.jalan.response_party,
      admin_id: this.jalan.admin_id,
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

  async submitJalan() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<Jalan>;
    console.log('JALAN :', this.jalanForm.value);
    if (this.isEditMode) {
      response = this.jalanService.updateJalan(
        this.jalan.id,
        this.jalanForm.value
      );
    } else {
      const formData = new FormData();
      formData.append('img', this.images[0].data);
      formData.append('filename', this.images[0].name);
      const url = `${this.apiUrl}/upload_image`;
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
            this.jalanForm.patchValue({ gambar_id: img_id });
            response = this.jalanService.addJalan(this.jalanForm.value);

            response.pipe(take(1)).subscribe((aduan) => {
              console.log(aduan);
              this.jalanForm.reset();
              loading.dismiss();
              if (this.isEditMode) {
                this.closeModal(aduan);
              }
              // modal.present();
            });
          } else {
            this.presentToast('File upload failed.');
          }
        });
    }
    response.pipe(take(1)).subscribe((jalan) => {
      console.log('SAVED TO DB JALAN', jalan);
      this.jalanForm.reset();
      loading.dismiss();

      if (this.isEditMode) {
        this.closeModal(jalan);
      }
    });
  }

  selectDaerah($event) {
    console.log('NEGERI ID: ', $event.target.value);
    const negeriId = $event.target.value;
    this.daerahs = this.jalanService.getDaerahs(negeriId).pipe(
      tap((res) => {
        console.log('Daerah:', res);
        return res;
      })
    );
  }

  getResponseParty($event) {
    const url = `${this.apiUrl}/get_jkr`;
    const daerah = {
      nama_daerah: $event.target.value,
    };
    console.log($event.target.value);
    this.http.post(url, daerah).subscribe((res) => {
      this.res_party = res[0].jkr_daerah;
      console.log('JKR: ', this.res_party);
      return res;
    });
  }

  closeModal(data = null) {
    this.modalCtrl.dismiss(data);
  }

  logout() {
    this.authService.logout();
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }
}
