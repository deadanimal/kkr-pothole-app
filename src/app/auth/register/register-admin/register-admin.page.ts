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
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user.model';
import { PhotoService } from 'src/app/shared/services/photo/photo.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.page.html',
  styleUrls: ['./register-admin.page.scss'],
})
export class RegisterAdminPage implements OnInit {
  @Input() user: User;
  isEditMode = false;
  regAdminForm: FormGroup;

  constructor(
    public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.initAddUserForm();
    if (this.user) {
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  initAddUserForm() {
    this.regAdminForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      telefon: new FormControl(null, [Validators.required]),
      nric: new FormControl(null, [Validators.required]),
      organisasi: new FormControl(null, [Validators.required]),
      jawatan: new FormControl(null, [Validators.required]),
    });
  }

  setFormValues() {
    this.regAdminForm.setValue({
      name: this.user.name,
      email: this.user.email,
      telefon: this.user.telefon,
      nric: this.user.nric,
      organisasi: this.user.organisasi,
      jawatan: this.user.jawatan,
    });
    console.log(this.user);
  }

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
      this.router.navigateByUrl('/admin-management', { replaceUrl: true });
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

  //======== insert photoservice here =====
}
