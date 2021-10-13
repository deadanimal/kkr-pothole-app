import { take } from 'rxjs/operators';
import { AduanService } from 'src/app/shared/services/aduan.service';
import { CreateAduanPage } from './../../core/user/create/create-aduan/create-aduan.page';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { Aduan } from 'src/app/shared/model/aduan.model';

@Component({
  selector: 'app-modal-aduan-detail',
  templateUrl: './modal-aduan-detail.page.html',
  styleUrls: ['./modal-aduan-detail.page.scss'],
})
export class ModalAduanDetailPage implements OnInit {
  @Input() aduan: Aduan;

  constructor(
    public modalCtrl: ModalController,
    private aduanService: AduanService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  closeModal(role = 'edit') {
    this.modalCtrl.dismiss(this.aduan, role);
  }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: CreateAduanPage,
      componentProps: { aduan: this.aduan },
    });
    await modal.present();

    const { data: updatedAduan } = await modal.onDidDismiss();
    if (updatedAduan) {
      this.aduan = updatedAduan;
    }
  }

  async onDeleteAduan() {
    const loading = await this.loadingCtrl.create({ message: 'Deleting...' });
    loading.present();
    this.aduanService
      .deleteAduan(this.aduan.id)
      .pipe(take(1))
      .subscribe(() => {
        loading.dismiss();
        this.closeModal('delete');
      });
  }
}
