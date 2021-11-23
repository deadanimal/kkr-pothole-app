/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
import { Router } from '@angular/router';
/* eslint-disable prefer-const */
import { UserService } from 'src/app/shared/services/user.service';
import { LoadingController, Platform } from '@ionic/angular';
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
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/admin/dashboard'])
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
        organisasi: new FormControl(null, [Validators.required]),
        jawatan: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [
          Validators.required,
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
      organisasi: this.user.organisasi,
      jawatan: this.user.jawatan,
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
      // this.router.navigateByUrl('/user/dashboard', { replaceUrl: true });
    });
  }

  get password() {
    return this.profileForm.get('password');
  }

  passwords(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  async logout() {
    await this.authService.logout();
  }

  public showPass = true;

  hideShowPassword(){
    this.showPass = !(this.showPass);
  }
}
