import { HttpClient } from '@angular/common/http';
/* eslint-disable no-var */
import { ToastController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
import { Router } from '@angular/router';
/* eslint-disable prefer-const */
import { UserService } from 'src/app/shared/services/user.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { User } from 'src/app/shared/model/user.model';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, take, tap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const TOKEN_KEY = 'my-token';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user$: Observable<User>;
  profileForm: FormGroup;
  user: User;
  passwordModel: string;
  url: any = '../../assets/img/default_icon.jpeg';
  images: LocalFile[];
  apiUrl = environment.baseUrl;

  token = '';

  error_messages = {
    password: [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
    confirmpassword: [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController,
    private platform: Platform,
    private toastCtrl: ToastController,
    private http: HttpClient
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/user/dashboard']);
    });
  }

  async ngOnInit() {
    this.images = [];
    this.initAddUserForm();
    this.loadToken();
  }

  async loadToken() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    const token = await Storage.get({ key: TOKEN_KEY });
    console.log('Token:', token.value);

    let body = {
      bearer_token: token.value,
    };

    this.userService.getAuthUser(body).subscribe((res) => {
      console.log(res);
      loading.dismiss();
      this.user = res;
      this.setFormValues();
      console.log('this user', this.user);
      if (this.user.gambar_id !== null) {
        this.userService
          .getGambarUser(this.user.gambar_id)
          .pipe(take(1))
          .subscribe(
            (res) => {
              this.url = res['url'];
              // console.log(this.url);
            },
            (err) => {
              this.url = '../../assets/img/default_icon.jpeg';
            }
          );
      } else {
        let response: Observable<User>;
        const formData = new FormData();
        formData.append('img', this.url);
        formData.append('filename', 'default_pic.jpeg');

        const url = `${this.apiUrl}/upload_image`;
        const header = new HttpHeaders({
          'Content-Type':
            'application/form-data; charset=UTF-8, application/json',
        });

        this.http
          .post(url, formData)
          .pipe(finalize(() => {}))
          .subscribe((res) => {
            console.log(res);
            if (res['success']) {
              // this.presentToast('File upload complete.');
              const img_id = res['gambar_id'];
              this.profileForm.patchValue({ gambar_id: img_id });
              console.log(this.profileForm.value);
              response = this.userService.updateUser(
                this.user.id,
                this.profileForm.value
              );
              this.url = '../../assets/img/default_icon.jpeg';
            } else {
              // this.presentToast('File upload failed.');
            }
            response.pipe(take(1)).subscribe((user) => {
              console.log(user);
            });
          });
      }
    });
  }

  initAddUserForm() {
    this.profileForm = this.formBuilder.group(
      {
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        telefon: new FormControl(null, [Validators.required]),
        doc_type: new FormControl(null, [Validators.required]),
        doc_no: new FormControl(null, [Validators.required]),
        image: new FormControl(null),
        gambar_id: new FormControl(null),
        password: new FormControl(null, [
          Validators.pattern('[a-zA-Z0-9_+-@$!%*?&:]*'),
          Validators.minLength(8),
          // Validators.required
        ]),
        confirmpassword: new FormControl(null),
      },
      {
        validators: this.passwords.bind(this),
      }
    );
  }

  setFormValues() {
    this.profileForm.patchValue({
      name: this.user.name,
      email: this.user.email,
      telefon: this.user.telefon,
      doc_type: this.user.doc_type,
      doc_no: this.user.doc_no,
      gambar_id: this.user.gambar_id,
    });
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

  async updateProfile() {
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
      loading.present();

      let response: Observable<User>;
      console.log('Profile :', this.profileForm.value);
      response = this.userService.updateUser(
        this.user.id,
        this.profileForm.value
      );
      if (this.images[0] && this.images[0].data.length > 0) {
        const body = {
          id: this.user.gambar_id,
          img: this.images[0].data,
          filename: this.images[0].name,
        };
        this.userService
          .updateGambarUser(this.user.gambar_id, body)
          .subscribe((res) => {
            console.log(res);
            if (res['success']) {
              this.presentToast('Gambar profil berjaya dikemaskini.');
            }
          });
      }
      response.pipe(take(1)).subscribe((user) => {
        console.log(user);
        this.profileForm.reset();
        loading.dismiss();
        this.loadToken();
        this.presentAlert();
        // this.router.navigateByUrl('/user/dashboard', { replaceUrl: true });
      });
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Makluman',
        message: 'Sila lengkapkan medan yang diperlukan',
        buttons: ['Okay'],
      });
      alert.present();
      this.validateAllFormFields(this.profileForm);
      this.setFormValues();
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    //{1}
    Object.keys(formGroup.controls).forEach((field) => {
      //{2}
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.validateAllFormFields(control); //{6}
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Berjaya',
      message: 'Kemaskini Anda Berjaya',
      buttons: ['Okay'],
    });
    await alert.present();
  }

  get password() {
    return this.profileForm.get('password');
  }

  passwords(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
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

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }

  async logout() {
    await this.authService.logout();
  }

  public showPass = true;

  hideShowPassword() {
    this.showPass = !this.showPass;
  }

  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  checkpss() {
    this.passwordModel = this.profileForm.get('password').value;
    if (this.passwordModel) {
      var matches = this.passwordModel.match('.*[A-Za-z].*');
      var matches2 = this.passwordModel.match('.*\\d.*');

      if (matches == null) {
        this.profileForm.patchValue({ password: '' });
        alert('Kata Laluan Tidak Mengandungi Huruf');
      } else {
        if (matches2 == null) {
          this.profileForm.patchValue({ password: '' });
          alert('Kata Laluan Tidak Mengandungi Nombor');
        }
      }
    }
  }
}
