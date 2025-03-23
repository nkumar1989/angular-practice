import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeLoanOfferService {
  private apiUrl = 'http://localhost:9090/offers';

  constructor(private http: HttpClient) {}

  getHomeLoanOffers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
