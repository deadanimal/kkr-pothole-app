import { Router } from '@angular/router';
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Storage } from '@capacitor/storage';
import { User } from '../../model/user.model';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.baseUrl;

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );
  token = '';
  public userRole: string;
  userId: any;

  constructor(private http: HttpClient, private router: Router) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: { email; password }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      map((data: any) => data),
      switchMap((token) => {
        console.log('Access token: ', this.token);
        this.token = token.access_token;
        this.userRole = token.data.role;
        return from(Storage.set({ key: TOKEN_KEY, value: token.access_token }));
      }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }

  getAuthUserRole(): Observable<User> {
    const body = {
      bearer_token: this.token,
    };
    return this.http.post<User>(`${this.apiUrl}/auth/user`, body).pipe(
      tap((res) => {
        this.userRole = res.role;
        this.userId = res.id;
        console.log('response user role: ', this.userRole);
      })
    );
  }

  async logout(): Promise<void> {
    this.isAuthenticated.next(false);
    Storage.remove({ key: TOKEN_KEY });
    this.router.navigate(['/login']);
  }
}
