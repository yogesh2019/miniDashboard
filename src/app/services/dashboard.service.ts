import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardRecord } from '../models/dashboard-record-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly apiUrl = `${environment.apiBaseUrl}/dashboard`;
  // adjust port if needed

  constructor(private http: HttpClient) { }

  getDashboardRecords(): Observable<DashboardRecord[]> {
    return this.http.get<DashboardRecord[]>(this.apiUrl);
  }
}
