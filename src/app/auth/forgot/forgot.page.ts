import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { take } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';

const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgot: FormGroup;
  user: User;
  getuser: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private platform: Platform,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/login']);
    });
  }

  async ngOnInit() {
    this.forgot = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();
    // console.log(this.forgot.value);

    this.userService.forgotUsers(this.forgot.value).subscribe(
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: res.title,
          message: res.message,
          buttons: ['Okay'],
        });
        if (
          res.message ===
          'Sila periksa email anda untuk mendapatkan kata laluan'
        ) {
          this.router.navigate(['/login']);
        }
        alert.present();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  backRoute() {
    this.router.navigate(['/login']);
  }
}
