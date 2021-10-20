import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Aduan } from '../model/aduan.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AduanService {
  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getAduans(): Observable<Aduan[]> {
    return this.http.get<Aduan[]>(`${this.apiUrl}/aduan`);
  }

  addAduan(aduan: Aduan): Observable<Aduan> {
    return this.http.post<Aduan>(`${this.apiUrl}/aduan/`, aduan);
  }

  updateAduan(aduanId: number, aduan: Aduan): Observable<Aduan> {
    return this.http.put<Aduan>(`${this.apiUrl}/aduan/${aduanId}`, aduan);
  }

  deleteAduan(aduanId: number): Observable<Aduan> {
    return this.http.delete<Aduan>(`${this.apiUrl}/aduan/${aduanId}`);
  }
}
