/* eslint-disable prefer-const */
/* eslint-disable no-var */
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JalanService } from './../../../shared/services/jalan.service';
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { JalanDetailPage } from 'src/app/modal/jalan-detail/jalan-detail.page';
import { Jalan } from '../../../shared/model/jalan.model';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-jalan-list',
  templateUrl: './jalan-list.page.html',
  styleUrls: ['./jalan-list.page.scss'],
})
export class JalanListPage implements OnInit {
  jalans$: Observable<Jalan[]>;
  isAdmin = false;
  isSuperAdmin = false;
  haveInfo = false;

  constructor(
    private modalCtrl: ModalController,
    private jalanService: JalanService,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private platform: Platform
  ) {
    const role = this.authService.userRole;
    if (role === 'super_admin') {
      this.isSuperAdmin = true;
    } else if (role === 'admin') {
      this.isAdmin = true;
    }
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.backRoute();
    });
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    this.jalans$ = this.jalanService.getJalans().pipe(
      tap((jalans) => {
        loading.dismiss();
        console.log('jalans:', jalans);
        if (jalans) {
          for (let item of jalans) {
            this.haveInfo = true;
            var today = new Date();
            var enddate = new Date(item.end_date);
            var index = jalans.indexOf(item);
            if (today.getTime() > enddate.getTime()) {
              jalans.splice(index, 1);
            }
          }
        }
        return jalans;
      })
    );
  }

  backRoute() {
    if (this.isAdmin) {
      this.router.navigate(['/admin/dashboard']);
    } else if (this.isSuperAdmin) {
      this.router.navigate(['/superadmin/dashboard']);
    }
  }

  async openDetailModal(jalan: Jalan) {
    const modal = await this.modalCtrl.create({
      component: JalanDetailPage,
      componentProps: { jalan },
    });

    await modal.present();

    const { data: updatedJalan, role } = await modal.onDidDismiss();
    if (updatedJalan && role === 'edit') {
      this.jalans$ = this.jalans$.pipe(
        map((jalans) => {
          jalans.forEach((element) => {
            if (element.id === updatedJalan.id) {
              element = updatedJalan;
            }
            return element;
          });
          return jalans;
        })
      );
    }
    if (role === 'delete') {
      this.jalans$ = this.jalans$.pipe(
        map((jalans) => {
          jalans.filter((adu) => adu.id !== updatedJalan.id);
          return jalans;
        })
      );
    }
  }

  logout() {
    this.authService.logout();
  }
}
