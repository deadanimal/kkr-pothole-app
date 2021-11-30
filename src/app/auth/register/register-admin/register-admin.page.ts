/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { AlertController } from '@ionic/angular';
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user.model';
import { PhotoService } from 'src/app/shared/services/photo/photo.service';
import { UserService } from 'src/app/shared/services/user.service';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.page.html',
  styleUrls: ['./register-admin.page.scss'],
})
export class RegisterAdminPage implements OnInit {
  @Input() user: User;
  isEditMode = false;
  regAdminForm: FormGroup;
  url: any;
  images: LocalFile[];

  constructor(
    public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private router: Router,
    private platform: Platform,
    private alertCtrl: AlertController
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.closeModal();
    });
  }

  ngOnInit() {
    this.initAddUserForm();
    if (this.user) {
      this.isEditMode = true;
      this.setFormValues();
      this.userService
        .getGambarUser(this.user.gambar_id)
        .pipe(take(1))
        .subscribe(
          (res) => {
            this.url = res['url'];
          },
          (err) => {
            this.url = '../../assets/img/default_icon.jpeg';
          }
        );
    } else {
      this.url = '../../assets/img/default_icon.jpeg';
    }
  }

  initAddUserForm() {
    this.regAdminForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telefon: new FormControl(null, [Validators.required]),
      doc_type: new FormControl('NRIC', [Validators.required]),
      doc_no: new FormControl(null, [Validators.required]),
      organisasi: new FormControl(null, [Validators.required]),
      jawatan: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      image: new FormControl(null),
    });
  }

  setFormValues() {
    this.regAdminForm.patchValue({
      name: this.user.name,
      email: this.user.email,
      telefon: this.user.telefon,
      doc_type: this.user.doc_type,
      doc_no: this.user.doc_no,
      organisasi: this.user.organisasi,
      jawatan: this.user.jawatan,
      role: this.user.role,
    });
    console.log(this.user);
  }

  // Convert the base64 to blob data
  // and create  formData with it
  async fileEvent(event) {
    const files = event.target.files;
    const file = files[0];
    const filePath = files[0].size;
    const base64Data = await this.readAsBase64(file);

    const fileName = new Date().getTime() + '.jpeg';

    if (files && files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }

    this.images.push({
      name: fileName,
      path: filePath,
      data: `${base64Data}`,
    });

    console.log(this.images);
  }

  // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
  private async readAsBase64(blob) {
    // Fetch the photo, read as a blob, then convert to base64 format
    // const response = await fetch(photo.webPath);
    // const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  async submitAdmin() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<User>;
    console.log('ADMIN JALAN :', this.regAdminForm.value);
    if (this.isEditMode) {
      response = this.userService.updateUser(
        this.user.id,
        this.regAdminForm.value
      );
    } else {
      response = this.userService.registerAdmin(this.regAdminForm.value);
    }
    response.pipe(take(1)).subscribe((user) => {
      console.log(user);
      this.regAdminForm.reset();
      loading.dismiss();
      if (this.isEditMode) {
        this.closeModal('edit');
      }
    });
  }

  async onDeleteUser() {
    const loading = await this.loadingCtrl.create({ message: 'Deleting...' });
    loading.present();
    this.userService
      .deleteUser(this.user.id)
      .pipe(take(1))
      .subscribe(() => {
        loading.dismiss();
        this.closeModal('delete');
      });
  }

  closeModal(role = 'edit') {
    this.modalCtrl.dismiss(this.user, role);
  }

  async deleteConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Pengesahan',
      message: 'Anda pasti untuk buang pengguna?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Pasti',
          handler: () => {
            console.log('Confirm Okay');
            this.onDeleteUser();
          },
        },
      ],
    });

    await alert.present();
  }

  InputNRIC() {
    document.getElementById('ICReg').addEventListener(
      'keyup',
      function (evt) {
        var inputValue = (<HTMLInputElement>document.getElementById('ICReg'))
          .value;

        if (evt.key != 'Backspace') {
          if (inputValue.length == 6 || inputValue.length == 9) {
            (<HTMLInputElement>document.getElementById('ICReg')).value =
              inputValue + '-';
          }
          if (
            (inputValue.length > 6 && inputValue.substring(6, 7) != '-') ||
            (inputValue.length > 9 && inputValue.substring(9, 10) != '-') ||
            inputValue.length > 14
          ) {
            (<HTMLInputElement>document.getElementById('ICReg')).value = '';
            alert('Not valid IC Number');
          }
        }
        if (evt.key == 'Backspace') {
          if (
            (inputValue.length == 6 && inputValue.substring(5, 6) != '-') ||
            (inputValue.length == 9 && inputValue.substring(9, 10) != '-')
          ) {
            (<HTMLInputElement>document.getElementById('ICReg')).value =
              inputValue + '-';
          }
        }
        // console.log(inputValue.substring(6,7));
        // console.log(evt.key);
      },
      false
    );
  }

  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }
  //======== insert photoservice here =====
}
