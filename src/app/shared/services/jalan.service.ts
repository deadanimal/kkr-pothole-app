import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Jalan } from '../model/jalan.model';
import { HttpClient } from '@angular/common/http';
import { Daerah } from '../model/daerah.model';
import { Negeri } from '../model/negeri.model';

@Injectable({ providedIn: 'root' })
export class JalanService {
  // apiUrl = 'http://127.0.0.1:8000/api';
  apiUrl = 'https://kkr-pothole-stg.prototype.com.my/api';

  constructor(private http: HttpClient) {}

  getJalans(): Observable<Jalan[]> {
    return this.http.get<Jalan[]>(`${this.apiUrl}/jalan`);
  }

  getDaerahs(negeriId: number): Observable<Daerah[]> {
    return this.http.get<Daerah[]>(`${this.apiUrl}/getdaerah/${negeriId}`);
  }

  getNegeris(): Observable<Negeri[]> {
    return this.http.get<Negeri[]>(`${this.apiUrl}/negeri`);
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

  getGambarJalan(gambarId: number) {
    return this.http.get(`${this.apiUrl}/gambar/${gambarId}`);
  }
}
