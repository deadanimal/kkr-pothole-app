import { take } from 'rxjs/operators';
import { JalanService } from 'src/app/shared/services/jalan.service';
import { CreateJalanPage } from '../../core/admin/create-jalan/create-jalan.page';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Jalan } from 'src/app/shared/model/jalan.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-jalan-detail',
  templateUrl: './jalan-detail.page.html',
  styleUrls: ['./jalan-detail.page.scss'],
})
export class JalanDetailPage implements OnInit {
  @Input() jalan: Jalan;
  isAdmin = false;
  constructor(
    private jalanService: JalanService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {
    const role = this.authService.userRole;
    console.log(role);
    if (role !== 'pengadu') {
      this.isAdmin = true;
    }
  }

  ngOnInit() {}

  closeModal(role = 'edit') {
    this.modalCtrl.dismiss(this.jalan, role);
  }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: CreateJalanPage,
      componentProps: { jalan: this.jalan },
    });
    await modal.present();

    const { data: updatedJalan } = await modal.onDidDismiss();
    if (updatedJalan) {
      this.jalan = updatedJalan;
    }
  }

  async onDeleteJalan() {
    const loading = await this.loadingCtrl.create({ message: 'Deleting...' });
    loading.present();
    this.jalanService
      .deleteJalan(this.jalan.id)
      .pipe(take(1))
      .subscribe(() => {
        loading.dismiss();
        this.closeModal('delete');
      });
  }

  // 3.0738, 101.5183
}
