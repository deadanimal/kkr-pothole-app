import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    name: 'user',
    pwd: 'user',
  };
  // Form
  // focusUsername;
  // focusPassword;
  loginForm: FormGroup;
  loginFormMessages = {
    username: [
      { type: 'required', message: 'Masukkan ID pengguna' },
      { type: 'email', message: 'Masukkan emel yang sah' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minLength',
        message: 'Password must have at least 8 characters',
      },
    ],
  };

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
    });
  }

  signIn() {
    const userName = this.loginForm.value.username;
    this.auth.signIn(userName).subscribe((user) => {
      const userRole = user.role;

      console.log(userName, userRole);
      if (userRole === 'ADMIN') {
        this.router.navigateByUrl('/dashboard', { replaceUrl: true });
      } else if (userRole === 'USER') {
        this.router.navigateByUrl('/dashboard', { replaceUrl: true });
      }
    });
  }

  // loginUser() {
  //   this.auth
  //     .login(this.user.name, this.user.pwd)
  //     .then(async (success) => {
  //       if (success) {
  //         this.auth.currentUser.role = 2;
  //         this.navCtrl.navigateRoot('/dashboard');
  //       }
  //     })
  //     .catch(async (err) => {
  //       const alert = await this.alertCtrl.create({
  //         header: 'Alert',
  //         subHeader: 'Subtitle',
  //         message: 'This is an alert message.',
  //         buttons: ['OK'],
  //       });

  //       alert.present();
  //     });
  // }
}
