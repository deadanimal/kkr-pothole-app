import { Observable } from 'rxjs';
import { AduanService } from './../../../../shared/services/aduan.service';
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import data from '../../../../../assets/data/aduanlist.json';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalAduanDetailPage } from 'src/app/modal/modal-aduan-detail/modal-aduan-detail.page';
import { Aduan } from '../../../../shared/model/aduan.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-aduan-list',
  templateUrl: './aduan-list.page.html',
  styleUrls: ['./aduan-list.page.scss'],
})
export class AduanListPage implements OnInit {
  aduans$: Observable<Aduan[]>;

  tableStyle = 'dark';
  private aduans = data;

  constructor(
    private modalCtrl: ModalController,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController
  ) {
    console.log(this.aduans);
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
      component: ModalAduanDetailPage,
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

  async open(row) {
    console.log(row.complaint_title);
  }

  switchStyle() {}
}
