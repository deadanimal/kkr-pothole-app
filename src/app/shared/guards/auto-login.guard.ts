/* eslint-disable @typescript-eslint/dot-notation */
import { UserService } from './../services/user.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { Storage } from '@capacitor/storage';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad {
  role: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private userService: UserService
  ) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        if (isAuthenticated) {
          // Directly open inside area
          console.log('Found previous token, automatic login');
          this.loadToken();
        } else {
          // Simply allow access to the login
          return true;
        }
      })
    );
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    console.log('Token:', token.value);

    const body = {
      bearer_token: token.value,
    };

    this.userService.getAuthUser(body).subscribe(
      (res) => {
        console.log(res);
        this.role = res['role'];
        console.log('Auto Login role:', this.role);

        if (this.role === 'super_admin') {
          this.router.navigateByUrl('/superadmin/dashboard', {
            replaceUrl: true,
          });
        } else if (this.role === 'admin') {
          this.router.navigateByUrl('/admin/dashboard', {
            replaceUrl: true,
          });
        } else if (this.role === 'pengadu') {
          this.router.navigateByUrl('/user/dashboard', {
            replaceUrl: true,
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
