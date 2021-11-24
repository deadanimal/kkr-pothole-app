/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
import { UserService } from './../../../../shared/services/user.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { AduanService } from '../../../../shared/services/aduan.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonInfiniteScroll,
  LoadingController,
  ModalController,
  Platform,
} from '@ionic/angular';
import { AduanDetailPage } from 'src/app/modal/aduan-detail/aduan-detail.page';
import { Aduan } from '../../../../shared/model/aduan.model';
import { map, tap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';
const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-aduan-list',
  templateUrl: './aduan-list.page.html',
  styleUrls: ['./aduan-list.page.scss'],
})
export class AduanListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  aduans$: Observable<Aduan[]>;
  aduans: Aduan[];
  user_id: any;
  token = '';

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/user/dashboard']);
    });
  }

  async ngOnInit() {
    await this.loadToken();
  }

  async loadToken() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    const token = await Storage.get({ key: TOKEN_KEY });
    console.log('Token:', token.value);

    let body = {
      bearer_token: token.value,
    };

    this.userService.getAuthUser(body).subscribe(
      (res) => {
        console.log(res);
        loading.dismiss();
        this.user_id = res['id'];
        console.log('this user', this.user_id);
        this.aduans$ = this.aduanService.getAduansByUser(this.user_id).pipe(
          tap((aduans) => {
            loading.dismiss();
            console.log('Aduans:', aduans);
            return aduans;
          })
        );
        console.log(this.aduans$);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

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
