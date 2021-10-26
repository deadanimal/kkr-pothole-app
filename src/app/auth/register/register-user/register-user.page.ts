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
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
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
    private router: Router
  ) {}

  ngOnInit() {
    this.initAddUserForm();
  }

  initAddUserForm() {
    this.regUserForm = this.formBuilder.group(
      {
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(
          null,
          Validators.compose([Validators.required, Validators.minLength(8)])
        ),
        confirmpassword: new FormControl(
          null,
          Validators.compose([Validators.required, Validators.minLength(8)])
        ),
        telefon: new FormControl(null, [Validators.required]),
        nric: new FormControl(null, [Validators.required]),
      },
      {
        validators: this.password.bind(this),
      }
    );
  }

  async submitUser() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    loading.present();

    let response: Observable<User>;
    console.log('JALAN :', this.regUserForm.value);
    response = this.userService.registerUser(this.regUserForm.value);
    response.pipe(take(1)).subscribe((user) => {
      console.log(user);
      this.regUserForm.reset();
      loading.dismiss();
      this.router.navigateByUrl('/login', { replaceUrl: true });
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
  //======== insert photoservice here =====
}
