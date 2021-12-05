/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { ToastController } from '@ionic/angular';
import { UserService } from './../../../shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Daerah } from './../../../shared/model/daerah.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
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
import { Router } from '@angular/router';

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
  image: any;
  fileimg: any;
  url: any;

  map2: any;
  address: string;

  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;
  res_party: any;
  isAdmin = false;
  isSuperAdmin = false;
  selectNegeri: any;

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
    private toastCtrl: ToastController,
    private router: Router,
    private platform: Platform
  ) {
    const role = this.authService.userRole;
    if (role === 'super_admin') {
      this.isSuperAdmin = true;
    } else if (role === 'admin') {
      this.isAdmin = true;
    }

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/admin/dashboard']);
    });
  }

  async ngOnInit() {
    this.images = [];
    this.initAddJalanForm();
    this.loadUserId();
    console.log('jalan data', this.jalanForm.value);

    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    this.negeris = await this.jalanService.getNegeris().pipe(
      tap((negeri) => {
        loading.dismiss();
        console.log('Negeri:', negeri);
        return negeri;
      })
    );
    if (this.jalan) {
      this.isEditMode = true;
      setTimeout(() => {
        this.setFormValues();
      }, 500);
      console.log('SET JALAN DAH');
    }
    loading.dismiss();
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

        if (this.isEditMode) {
          this.jalanService
            .getGambarJalan(this.jalan.gambar_id)
            .pipe(take(1))
            .subscribe((res) => {
              this.url = res['url'];
            });
        } else {
          this.url = 'assets/img/no_image.png';
        }
      },
      (err) => {
        console.log(err);
        this.url = 'assets/img/no_image.png';
      }
    );
  }

  initAddJalanForm() {
    this.jalanForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
      status: new FormControl('Ditutup', [Validators.required]),
      start_date: new FormControl(null, [Validators.required]),
      end_date: new FormControl(null, [Validators.required]),
      negeri: new FormControl(null, [Validators.required]),
      daerah: new FormControl(null, [Validators.required]),
      response_party: new FormControl(null, [Validators.required]),
      admin_id: new FormControl(null),
      image: new FormControl(null),
      gambar_id: new FormControl(null),
    });
  }

  setFormValues() {
    this.jalanForm.patchValue({
      name: this.jalan.name,
      detail: this.jalan.detail,
      status: this.jalan.status,
      start_date: this.jalan.start_date,
      end_date: this.jalan.end_date,
      negeri: this.jalan.negeri,
      daerah: this.jalan.daerah,
      response_party: this.jalan.response_party,
      admin_id: this.jalan.admin_id,
      gambar_id: this.jalan.gambar_id,
    });
    console.log(this.jalanForm.value);
  }

  // Convert the base64 to blob data
  // and create  formData with it
  async fileEvent(event) {
    const files = event.target.files;
    const file = files[0];
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
      response.pipe(take(1)).subscribe((jalan) => {
        console.log('UPDATED JALAN', jalan);
        loading.dismiss();
        this.closeModal(jalan);

        // modal.present();
      });
      if (this.images[0] && this.images[0].data.length > 0) {
        const body = {
          id: this.jalan.gambar_id,
          img: this.images[0].data,
          filename: this.images[0].name,
        };
        this.jalanService
          .updateGambarJalan(this.jalan.gambar_id, body)
          .subscribe((res) => {
            console.log(res);
            if (res['success']) {
              this.presentToast('Gambar jalan berjaya dikemaskini.');
            }
          });
      }

      loading.dismiss();
    } else {
      const formData = new FormData();
      if (this.images[0] && this.images[0].data.length > 0) {
        formData.append('img', this.images[0].data);
        formData.append('filename', this.images[0].name);
      } else {
        formData.append('img', this.url);
        formData.append('filename', 'default_pic.jpeg');
      }

      const url = `${this.apiUrl}/upload_image`;
      const header = new HttpHeaders({
        'Content-Type':
          'application/form-data; charset=UTF-8, application/json',
      });

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
            console.log('File upload complete.');
            const img_id = res['gambar_id'];
            this.jalanForm.patchValue({ gambar_id: img_id });
            response = this.jalanService.addJalan(this.jalanForm.value);
            response.pipe(take(1)).subscribe((jalan) => {
              console.log('NEW JALAN ADDED', jalan);
              this.jalanForm.reset();
              this.url = 'assets/img/no_image.png';
              loading.dismiss();
              this.closeModal();
            });
          } else {
            console.log('File upload failed.');
          }
        });
    }
  }

  selectDaerah($event) {
    this.jalanForm.patchValue({
      daerah: '',
      response_party: '',
    });
    console.log('NEGERI ID: ', $event.target.value);
    const negeriId = $event.target.value;
    this.selectNegeri = negeriId;
    // this.jalanForm.patchValue({
    //   negeri: negeriId,
    // });
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
      if (res[0]) {
        this.res_party = res[0].jkr_daerah;
        console.log('JKR: ', this.res_party);
      }
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
