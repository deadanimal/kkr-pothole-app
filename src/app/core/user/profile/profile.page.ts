/* eslint-disable no-var */
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
import { take, tap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';

const TOKEN_KEY = 'my-token';

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

  token = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/user/dashboard']);
    });
  }

  async ngOnInit() {
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

    this.userService.getAuthUser(body).subscribe(
      (res) => {
        console.log(res);
        loading.dismiss();
        this.user = res;
        this.setFormValues();
        console.log('this user', this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  initAddUserForm() {
    this.profileForm = this.formBuilder.group(
      {
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        telefon: new FormControl(null, [Validators.required]),
        doc_type: new FormControl(null, [Validators.required]),
        doc_no: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [
          Validators.pattern('[a-zA-Z0-9_.+-]*'),
          Validators.minLength(8),
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
    });
  }

  async updateProfile() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<User>;
    console.log('Profile :', this.profileForm.value);
    response = this.userService.updateUser(
      this.user.id,
      this.profileForm.value
    );
    response.pipe(take(1)).subscribe((user) => {
      console.log(user);
      this.profileForm.reset();
      loading.dismiss();
      this.loadToken();
      this.presentAlert();
      // this.router.navigateByUrl('/user/dashboard', { replaceUrl: true });
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Berjaya',
      message: 'Kemaskini Anda Berjaya',
      buttons: ['Okay']
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
    var matches = this.passwordModel.match(".*[A-Za-z].*");
    var matches2 = this.passwordModel.match(".*\\d.*");

    if (matches == null) {
      this.passwordModel = '';
      alert('Kata Laluan Tidak Mengandungi Huruf');
    } else {
      if (matches2 == null) {
        this.passwordModel = '';
        alert('Kata Laluan Tidak Mengandungi Nombor');
      }
    }
  }
}
