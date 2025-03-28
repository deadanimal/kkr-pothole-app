/* eslint-disable @typescript-eslint/member-ordering */
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

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
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
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.checkGPSPermission();
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
          this.router.navigate(['superadmin/dashboard']);
        } else if (role === 'admin') {
          this.router.navigate(['admin/dashboard']);
        } else if (role === 'pengadu') {
          this.router.navigate(['user/dashboard']);
        }
      },
      async (err) => {
        console.log(err.error);
        await loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Log Masuk Gagal',
          message: err.error.message,
          buttons: ['Okay'],
        });
        await alert.present();
      }
    );
  }

  openForgotPass() {
    this.router.navigate(['/forgot']);
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

  // ========================== ASK LOCATION ==================

  //Check if application having GPS access permission
  checkGPSPermission() {
    this.androidPermissions
      .checkPermission(
        this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
      )
      .then(
        (result) => {
          if (result.hasPermission) {
            //If having permission show 'Turn On GPS' dialogue
            this.askToTurnOnGPS();
          } else {
            //If not having permission ask for permission
            this.requestGPSPermission();
          }
        },
        (err) => {
          // alert(err);
        }
      );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log('4');
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions
          .requestPermission(
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
          )
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            (error) => {
              //Show alert if user click on 'No Thanks'
              // alert(
              //   'requestPermission Error requesting location permissions ' +
              //     error
              // );
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy
      .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(
        () => {
          // When GPS Turned ON call method to get Accurate location coordinates
          // this.getLocationCoordinates();
        },
        (error) => {
          // alert(
          //   'Error requesting location permissions ' + JSON.stringify(error)
          // );
        }
      );
  }

  public showPass = true;

  hideShowPassword() {
    this.showPass = !this.showPass;
  }
}
