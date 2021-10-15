import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Jalan } from '../model/jalan.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JalanService {
  apiUrl = 'https://kkr-pothole-stg.prototype.com.my/api';

  constructor(private http: HttpClient) {}

  getJalans(): Observable<Jalan[]> {
    return this.http.get<Jalan[]>(`${this.apiUrl}/jalan`);
  }

  addJalan(jalan: Jalan): Observable<Jalan> {
    return this.http.post<Jalan>(`${this.apiUrl}/jalan/`, jalan);
  }

  updateJalan(aduanId: number, jalan: Jalan): Observable<Jalan> {
    return this.http.put<Jalan>(`${this.apiUrl}/jalan/${aduanId}`, jalan);
  }

  deleteJalan(aduanId: number): Observable<Jalan> {
    return this.http.delete<Jalan>(`${this.apiUrl}/jalan/${aduanId}`);
  }
}
