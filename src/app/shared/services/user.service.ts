import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getAuthUser(body): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/user`, body);
  }

  getAdmins(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/admin`);
  }

  getSAdmins(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/superadmin`);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register/user`, user);
  }

  registerAdmin(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register/admin`, user);
  }

  registerSAdmin(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register/superadmin`, user);
  }

  updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/${userId}`, user);
  }

  deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/user/${userId}`);
  }

  getGambarUser(gambarId: number) {
    return this.http.get(`${this.apiUrl}/gambar/${gambarId}`);
  }

  updateGambarUser(gambarId: number, body) {
    return this.http.put(`${this.apiUrl}/gambar/${gambarId}`, body);
  }
}
