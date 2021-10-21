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
  selector: 'app-register-superadmin',
  templateUrl: './register-superadmin.page.html',
  styleUrls: ['./register-superadmin.page.scss'],
})
export class RegisterSuperadminPage implements OnInit {
  @Input() user: User;
  isEditMode = false;
  regSuperAdminForm: FormGroup;

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
    this.regSuperAdminForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      telefon: new FormControl(null, [Validators.required]),
      nric: new FormControl(null, [Validators.required]),
      organisasi: new FormControl(null, [Validators.required]),
      jawatan: new FormControl(null, [Validators.required]),
    });
  }

  setFormValues() {
    this.regSuperAdminForm.setValue({
      name: this.user.name,
      email: this.user.email,
      telefon: this.user.telefon,
      nric: this.user.nric,
      organisasi: this.user.organisasi,
      jawatan: this.user.jawatan,
    });
  }

  async submitAdmin() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<User>;
    console.log('SUPERADMIN :', this.regSuperAdminForm.value);
    if (this.isEditMode) {
      response = this.userService.updateUser(
        this.user.id,
        this.regSuperAdminForm.value
      );
    } else {
      response = this.userService.registerSAdmin(this.regSuperAdminForm.value);
    }
    response.pipe(take(1)).subscribe((user) => {
      console.log(user);
      this.regSuperAdminForm.reset();
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
