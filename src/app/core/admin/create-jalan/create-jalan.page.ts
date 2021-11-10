/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClient } from '@angular/common/http';
import { Daerah } from './../../../shared/model/daerah.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingController, ModalController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../../../shared/services/photo/photo.service';

import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Jalan } from 'src/app/shared/model/jalan.model';
import { JalanService } from 'src/app/shared/services/jalan.service';
import { Negeri } from 'src/app/shared/model/negeri.model';

@Component({
  selector: 'app-create-jalan',
  templateUrl: './create-jalan.page.html',
  styleUrls: ['./create-jalan.page.scss'],
})
export class CreateJalanPage implements OnInit {
  @Input() jalan: Jalan;
  daerahs: Observable<Daerah[]>;
  negeris: Observable<Negeri[]>;
  isEditMode = false;
  jalanForm: FormGroup;

  map2: any;
  address: string;

  latitude: number;
  longitude: number;
  myMarker: any;
  center: any;
  res_party: any;

  constructor(
    public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private jalanService: JalanService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.initAddJalanForm();
    console.log('jalan data', this.jalanForm.value);
    if (this.jalan) {
      this.isEditMode = true;
      this.setFormValues();
    }

    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    // loading.present();

    this.negeris = this.jalanService.getNegeris().pipe(
      tap((negeri) => {
        loading.dismiss();
        console.log('Daerah:', negeri);
        return negeri;
      })
    );
  }

  initAddJalanForm() {
    this.jalanForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      negeri: new FormControl(null, [Validators.required]),
      daerah: new FormControl(null, [Validators.required]),
      response_party: new FormControl(null, [Validators.required]),
      admin_id: new FormControl(null),
    });
  }

  setFormValues() {
    this.jalanForm.setValue({
      name: this.jalan.name,
      detail: this.jalan.detail,
      status: this.jalan.status,
      start_date: this.jalan.start_date,
      end_date: this.jalan.end_date,
      negeri: this.jalan.negeri,
      daerah: this.jalan.daerah,
      response_party: this.jalan.response_party,
      admin_id: this.jalan.admin_id,
    });
  }

  async submitJalan() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<Jalan>;
    console.log('JALAN :', this.jalanForm.value);
    if (this.isEditMode) {
      response = this.jalanService.updateJalan(
        this.jalan.id,
        this.jalanForm.value
      );
    } else {
      response = this.jalanService.addJalan(this.jalanForm.value);
    }
    response.pipe(take(1)).subscribe((jalan) => {
      console.log('SAVED TO DB JALAN',jalan);
      this.jalanForm.reset();
      loading.dismiss();

      if (this.isEditMode) {
        this.closeModal(jalan);
      }
    });
  }

  selectDaerah($event) {
    console.log('NEGERI ID: ', $event.target.value);
    const negeriId = $event.target.value;
    this.daerahs = this.jalanService.getDaerahs(negeriId).pipe(
      tap((res) => {
        console.log('Daerah:', res);
        return res;
      })
    );
  }

  getResponseParty($event) {
    const url = 'http://127.0.0.1:8000/api/get_jkr';
    const daerah = {
      nama_daerah: $event.target.value,
    };
    console.log($event.target.value);
    this.http.post(url, daerah).subscribe((res) => {
      this.res_party = res[0].jkr_daerah;
      console.log('JKR: ',this.res_party);
      return res;
    });
  }

  closeModal(data = null) {
    this.modalCtrl.dismiss(data);
  }

  logout() {
    this.authService.logout();
  }
}
