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
    name: 'admin',
    pwd: 'admin',
  };
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
        this.user.name,
        Validators.compose([Validators.required])
      ),
      password: new FormControl(
        this.user.pwd,
        Validators.compose([Validators.required])
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
}
