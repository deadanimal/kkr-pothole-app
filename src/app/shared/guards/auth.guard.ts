import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    private alertCtrl: AlertController
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data?.role;
    return this.auth.getUser().pipe(
      filter((val) => val !== null),
      take(1),
      map((user) => {
        console.log('Expected User:', user);
        if (!user) {
          this.showAlert();
          return this.router.parseUrl('/login');
        } else {
          const role = user.role;
          if(!expectedRole || expectedRole === role){
            return true;
          }else{
            this.showAlert2();
            return false;
          }
        }
      })
    );
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Testt',
      message: 'this is testing',
      buttons: ['Okay'],
    });
    alert.present();
  }

  async showAlert2() {
    const alert = await this.alertCtrl.create({
      header: 'Testt2222',
      message: 'this is testing',
      buttons: ['Okay'],
    });
    alert.present();
  }
}
