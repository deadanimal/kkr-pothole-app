import { RegisterUserPage } from './../register/register-user/register-user.page';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        const role = await this.authService.userRole;
        await console.log('login role', role);
        if (role === 'super_admin') {
          this.router.navigateByUrl('superadmin/dashboard', {
            replaceUrl: true,
          });
        } else if (role === 'admin') {
          this.router.navigateByUrl('admin/dashboard', { replaceUrl: true });
        } else if (role === 'pengadu') {
          this.router.navigateByUrl('user/dashboard', { replaceUrl: true });
        }
      },
      async (err) => {
        await loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Log Masuk Gagal',
          message: 'Sila masukkan emel dan kata laluan yang sah.',
          buttons: ['Okay'],
        });

        await alert.present();
      }
    );
  }

  async openRegister() {
    const modal = await this.modalCtrl.create({
      component: RegisterUserPage,
    });

    await modal.present();
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}
