/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { SuccessPage } from 'src/app/core/global/alert/success/success.page';
import { User } from 'src/app/shared/model/user.model';
import { PhotoService } from 'src/app/shared/services/photo/photo.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  @Input() user: User;
  regUserForm: FormGroup;
  email: string;

  error_messages = {
    password: [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
    confirmpassword: [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
  };

  constructor(
    public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.closeModal();
    });
  }

  ngOnInit() {
    this.initAddUserForm();
  }

  initAddUserForm() {
    this.regUserForm = this.formBuilder.group(
      {
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        telefon: new FormControl(null, [Validators.required]),
        doc_type: new FormControl(null, [Validators.required]),
        doc_no: new FormControl(null, [Validators.required]),
        password: new FormControl(null),
        confirmpassword: new FormControl(null),
      },
      {
        validators: this.password.bind(this),
      }
    );
  }

  async submitUser() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    this.email = this.regUserForm.get('email').value;
    const modal = await this.modalCtrl.create({
      component: SuccessPage,
      componentProps: {
        title: 'Daftar Aduan',
        message: `Sila semak emel anda di ${this.email} untuk pengesahan dan meneruskan proses.`,
      },
    });
    loading.present();

    let response: Observable<User>;
    console.log('Daftar User :', this.regUserForm.value);
    response = this.userService.registerUser(this.regUserForm.value);
    response.pipe(take(1)).subscribe((user) => {
      console.log(user);
      this.regUserForm.reset();
      loading.dismiss();
      this.router.navigateByUrl('/login', { replaceUrl: true });
      modal.present();
      this.closeModal();
    });
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  public showPass = true;

  hideShowPassword(){
    this.showPass = !(this.showPass);
  }
  //======== insert photoservice here =====
}
