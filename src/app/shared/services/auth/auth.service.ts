/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const TOKEN_KEY = 'user-token';

export interface User {
  name: string;
  role: string;
  permissions: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private router: Router) {
    this.loadUser();
  }

  loadUser() {
    Storage.get({ key: TOKEN_KEY }).then((res) => {
      if (res.value) {
        this.currentUser.next(JSON.parse(res.value));
      } else {
        this.currentUser.next(false);
      }
    });
  }

  signIn(name) {
    let userObj: User;
    if (name === 'admin') {
      userObj = {
        name: 'Saad Admin',
        role: 'ADMIN',
        permissions: ['read', 'write'],
      };
    } else if (name === 'user') {
      userObj = {
        name: 'Ahmad Test',
        role: 'USER',
        permissions: ['read'],
      };
    }

    return of(userObj).pipe(
      tap((user) => {
        Storage.set({ key: TOKEN_KEY, value: JSON.stringify(user) });
      })
    );
  }

  getUser() {
    return this.currentUser.asObservable();
  }

  async logout() {
    await Storage.remove({ key: TOKEN_KEY });
    // this.currentUser.next(false);
    this.loadUser();
    this.router.navigateByUrl('/login', { replaceUrl: true }).then(() => {
      window.location.reload();
    });
  }

  hasPermission(permissions: string[]): boolean {
    for (const permission of permissions) {
      if (
        !this.currentUser.value ||
        !this.currentUser.value.permissions.includes(permission)
      ) {
        return false;
      }
    }
    return true;
  }
}
