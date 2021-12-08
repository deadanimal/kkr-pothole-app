/* eslint-disable @typescript-eslint/member-ordering */
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { AduanService } from '../../../../shared/services/aduan.service';
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { AduanDetailPage } from 'src/app/modal/aduan-detail/aduan-detail.page';
import { Aduan } from '../../../../shared/model/aduan.model';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aduan-list',
  templateUrl: './aduan-list.page.html',
  styleUrls: ['./aduan-list.page.scss'],
})
export class AduanListPage implements OnInit {
  aduans$: Observable<Aduan[]>;
  @Input() isModal = false;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/superadmin/dashboard']);
    });
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    this.aduans$ = this.aduanService.getAduans().pipe(
      tap((aduans) => {
        loading.dismiss();
        console.log('Aduans:', aduans);
        return aduans;
      })
    );
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
}
