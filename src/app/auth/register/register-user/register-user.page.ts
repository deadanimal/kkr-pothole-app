/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/dot-notation */
import { ToastController } from '@ionic/angular';
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ModalController,
  Platform,
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { SuccessPage } from 'src/app/core/global/alert/success/success.page';
import { User } from 'src/app/shared/model/user.model';
import { PhotoService } from 'src/app/shared/services/photo/photo.service';
import { UserService } from 'src/app/shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  @Input() user: User;
  regUserForm: FormGroup;
  emel: string;
  passwordModel: string;
  url: any = '../../assets/img/default_icon.jpeg';
  images: LocalFile[] = [];
  apiUrl = environment.baseUrl;

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
    public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private router: Router,
    private platform: Platform,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.closeModal();
    });
  }

  ngOnInit() {
    this.initAddUserForm();
  }

  initAddUserForm() {
    this.regUserForm = this.formBuilder.group(
      {
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        telefon: new FormControl(null, [Validators.required]),
        doc_type: new FormControl(null, [Validators.required]),
        doc_no: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9_+-@$!%*?&:]*'),
          Validators.minLength(8),
        ]),
        confirmpassword: new FormControl(null),
        image: new FormControl(null),
        gambar_id: new FormControl(null),
      },
      {
        validators: this.passwords.bind(this),
      }
    );
  }

  // Convert the base64 to blob data
  // and create  formData with it
  async fileEvent(event) {
    this.images = [];
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

  async submitUser() {
    if (this.regUserForm.valid) {
      const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
      this.emel = this.regUserForm.get('email').value;
      loading.present();

      let response: Observable<User>;
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

      this.http.post(url, formData).subscribe(
        (res) => {
          console.log('test2', res);
          if (res['success']) {
            // this.presentToast('File upload complete.');
            const img_id = res['gambar_id'];
            this.regUserForm.patchValue({ gambar_id: img_id });
            response = this.userService.registerUser(this.regUserForm.value);
          } else {
            this.presentToast('Muat naik gambar gagal');
          }
          response
            .pipe(
              finalize(() => {
                loading.dismiss();
              })
            )
            .subscribe(
              async (user) => {
                console.log('test1', user);
                if (user.message == 'success') {
                  this.url = '../../assets/img/default_icon.jpeg';
                  this.closeModal();
                  const modal = await this.modalCtrl.create({
                    component: SuccessPage,
                    componentProps: {
                      title: 'Pengesahan Emel',
                      message: `Akaun pengguna menggunakan e-mel <i>${this.emel}</i> telah berjaya dicipta. Mohon semak e-mel untuk pengaktifan. `,
                    },
                  });
                  console.log('Daftar User :', this.regUserForm.value);
                  this.regUserForm.reset();
                  modal.present();
                } else {
                  if (
                    user.message == 'failemail' ||
                    user.message == 'faildoc'
                  ) {
                    var messview = `Akaun pengguna menggunakan e-mel <i>${this.emel}</i> GAGAL dicipta. E-mel / No. Kad Pengenalan / No. Passport telah didaftarkan sebelum ini`;
                  }
                  const alert = await this.alertCtrl.create({
                    header: 'PENDAFTARAN AKAUN TIDAK BERJAYA',
                    message: messview,
                    buttons: ['Okay'],
                  });
                  await alert.present();
                }
              },
              (err) => {
                console.error('test1', err);
              }
            );
        },
        (err) => {
          console.error('test2', err);
        }
      );
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Makluman',
        message: 'Sila lengkapkan medan yang diperlukan',
        buttons: ['Okay'],
      });
      alert.present();
      this.validateAllFormFields(this.regUserForm);
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

  get name() {
    return this.regUserForm.get('name');
  }
  get email() {
    return this.regUserForm.get('email');
  }
  get doc_type() {
    return this.regUserForm.get('doc_type');
  }
  get doc_no() {
    return this.regUserForm.get('doc_no');
  }
  get telefon() {
    return this.regUserForm.get('telefon');
  }
  get password() {
    return this.regUserForm.get('password');
  }

  passwords(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  closeModal() {
    console.log('tutup');
    this.modalCtrl.dismiss();
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

  docselect(val) {
    var doctype = val.detail.value;
    console.log(doctype);
    if (doctype == 'NRIC') {
      document
        .getElementById('ICReg')
        .addEventListener('keyup', this.ICRegkeyup, false);
      document
        .getElementById('ICReg')
        .addEventListener('focusout', this.ICRegfocout, false);
    } else {
      document
        .getElementById('ICReg')
        .removeEventListener('keyup', this.ICRegkeyup, false);
      document
        .getElementById('ICReg')
        .removeEventListener('focusout', this.ICRegfocout, false);
    }
  }

  ICRegkeyup(evt) {
    var inputValue = (<HTMLInputElement>document.getElementById('ICReg')).value;

    if (evt.key != 'Backspace') {
      if (inputValue.length == 6 || inputValue.length == 9) {
        (<HTMLInputElement>document.getElementById('ICReg')).value =
          inputValue + '-';
      }
      if (
        (inputValue.length > 6 && inputValue.substring(6, 7) != '-') ||
        (inputValue.length > 9 && inputValue.substring(9, 10) != '-') ||
        inputValue.length > 14
      ) {
        (<HTMLInputElement>document.getElementById('ICReg')).value = '';
        alert('Not valid IC Number');
      }
    }
    if (evt.key == 'Backspace') {
      if (
        (inputValue.length == 6 && inputValue.substring(5, 6) != '-') ||
        (inputValue.length == 9 && inputValue.substring(9, 10) != '-')
      ) {
        (<HTMLInputElement>document.getElementById('ICReg')).value =
          inputValue + '-';
      }
    }
  }

  ICRegfocout() {
    var inputValue = (<HTMLInputElement>document.getElementById('ICReg')).value;
    if (inputValue.length != 14) {
      (<HTMLInputElement>document.getElementById('ICReg')).value = '';
      alert('IC Number not enought character');
    }
  }
  checkpss() {
    this.passwordModel = this.regUserForm.get('password').value;
    if (this.passwordModel) {
      var matches = this.passwordModel.match('.*[A-Za-z].*');
      var matches2 = this.passwordModel.match('.*\\d.*');

      if (matches == null) {
        this.regUserForm.patchValue({ password: '' });
        alert('Kata Laluan Tidak Mengandungi Huruf');
      } else {
        if (matches2 == null) {
          this.regUserForm.patchValue({ password: '' });
          alert('Kata Laluan Tidak Mengandungi Nombor');
        }
      }
    }
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }
}
