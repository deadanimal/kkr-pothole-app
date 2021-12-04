import { Observable } from 'rxjs';
import { JalanService } from './../../../../shared/services/jalan.service';
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { JalanDetailPage } from 'src/app/modal/jalan-detail/jalan-detail.page';
import { Jalan } from '../../../../shared/model/jalan.model';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jalan-list',
  templateUrl: './jalan-list.page.html',
  styleUrls: ['./jalan-list.page.scss'],
})
export class JalanListPage implements OnInit {
  jalans$: Observable<Jalan[]>;
  haveInfo = false;

  constructor(
    private modalCtrl: ModalController,
    private jalanService: JalanService,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private platform: Platform
  ) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/user/dashboard'])
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
            var today = new Date();
            var enddate = new Date(item.end_date);
            console.log("naqib", today+"====="+enddate)
            if(enddate >= today){
              this.haveInfo = true;
            }
          }
        }
        return jalans;
      })
    );
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
