import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { UserService } from '../../../../shared/services/user.service';
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user.model';
import { UserDetailPage } from 'src/app/modal/user-detail/user-detail.page';
import { RegisterAdminPage } from 'src/app/auth/register/register-admin/register-admin.page';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {
  users$: Observable<User[]>;
  user: User;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['superadmin/admin-management']);
    });
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    this.users$ = this.userService.getAdmins().pipe(
      tap((users) => {
        loading.dismiss();
        console.log('Users:', users);
        return users;
      })
    );
  }

  backRoute() {
    this.router.navigate(['superadmin/admin-management']);
  }

  async openDetailModal(user) {
    const modal = await this.modalCtrl.create({
      component: RegisterAdminPage,
      componentProps: { user },
    });
    console.log('open user ', this.user);

    await modal.present();

    const { data: updatedUser, role } = await modal.onDidDismiss();
    if (updatedUser && role === 'edit') {
      this.users$ = this.users$.pipe(
        map((users) => {
          users.forEach((element) => {
            if (element.id === updatedUser.id) {
              element = updatedUser;
            }
            return element;
          });
          return users;
        })
      );
    }
    if (role === 'delete') {
      this.users$ = this.users$.pipe(
        map((users) => {
          users.filter((user) => user.id !== updatedUser.id);
          return users;
        })
      );
    }
  }

  logout() {
    this.authService.logout();
  }
}
