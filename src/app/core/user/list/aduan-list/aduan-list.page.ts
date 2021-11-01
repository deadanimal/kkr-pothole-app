import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { AduanService } from '../../../../shared/services/aduan.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonInfiniteScroll,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { AduanDetailPage } from 'src/app/modal/aduan-detail/aduan-detail.page';
import { Aduan } from '../../../../shared/model/aduan.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-aduan-list',
  templateUrl: './aduan-list.page.html',
  styleUrls: ['./aduan-list.page.scss'],
})
export class AduanListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  aduans$: Observable<Aduan[]>;
  aduans: Aduan[];

  topLimit = 15;
  dataList: any = [];

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController
  ) {}

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
    console.log(this.aduans$);
    this.dataList = this.aduans$.forEach((element) => {});
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
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
}
