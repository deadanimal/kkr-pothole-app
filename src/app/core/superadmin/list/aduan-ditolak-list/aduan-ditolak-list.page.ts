/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { AduanService } from '../../../../shared/services/aduan.service';
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { AduanDetailPage } from 'src/app/modal/aduan-detail/aduan-detail.page';
import { Aduan } from '../../../../shared/model/aduan.model';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aduan-ditolak-list',
  templateUrl: './aduan-ditolak-list.page.html',
  styleUrls: ['./aduan-ditolak-list.page.scss'],
})
export class AduanDitolakListPage implements OnInit {
  aduans$: Observable<Aduan[]>;
  user_id: any;
  haveInfo = false;
  isSuperAdmin = false;
  isAdmin = false;
  isUser = false;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private platform: Platform
  ) {
    const role = this.authService.userRole;
    this.user_id = this.authService.userId;
    if (role === 'super_admin') {
      this.isSuperAdmin = true;
    } else if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'pengadu') {
      this.isUser = true;
    }

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/superadmin/dashboard']);
    });
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    if (this.isAdmin || this.isSuperAdmin) {
      this.aduans$ = this.aduanService.getAduans().pipe(
        map((aduans) => {
          loading.dismiss();
          const adu = aduans.filter((res) => res.status_code === 'R');
          if (adu.length > 0) {
            this.haveInfo = true;
          }
          console.log('Aduans:', aduans);
          return adu;
        })
      );
    } else if (this.isUser) {
      this.aduans$ = this.aduanService.getAduansByUser(this.user_id).pipe(
        map((aduans) => {
          loading.dismiss();
          const adu = aduans.filter((res) => res.status_code === 'R');
          if (adu.length > 0) {
            this.haveInfo = true;
          }
          console.log(aduans);
          return adu;
        })
      );
    }
  }

  async openDetailModal(aduan: Aduan) {
    const modal = await this.modalCtrl.create({
      component: AduanDetailPage,
      componentProps: { aduan },
    });

    await modal.present();

    const { data: updatedAduan, role } = await modal.onDidDismiss();
    if (updatedAduan && role === 'edit') {
      this.aduans$ = this.aduans$.pipe(
        map((aduans) => {
          aduans.forEach((element) => {
            if (element.id === updatedAduan.id) {
              element = updatedAduan;
            }
            return element;
          });
          return aduans;
        })
      );
    }
    if (role === 'delete') {
      this.aduans$ = this.aduans$.pipe(
        map((aduans) => {
          aduans.filter((adu) => adu.id !== updatedAduan.id);
          return aduans;
        })
      );
    }
  }

  logout() {
    this.authService.logout();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  selectBulanTahun(e) {
    this.haveInfo = false;
    const date = e.target.value;
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    console.log(month, year);

    const body = {
      bulan: month,
      tahun: year,
    };

    this.aduans$ = this.aduanService.getAduansByMonthYear(body).pipe(
      map((aduans) => {
        const adu = aduans.filter((res) => res.status_code === 'R');
          if (adu.length > 0) {
            this.haveInfo = true;
          }
          console.log(aduans);
          return adu;

      })
    );
  }
}
