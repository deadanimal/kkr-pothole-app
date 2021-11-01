import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
