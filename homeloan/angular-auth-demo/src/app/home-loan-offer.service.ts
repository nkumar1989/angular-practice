import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeLoanOffer } from './models/home-loan-offer';

@Injectable({
  providedIn: 'root',
})
export class HomeLoanOfferService {
  private apiUrl = 'http://localhost:9090/offers';

  constructor(private http: HttpClient) {}

  getHomeLoanOffers(): Observable<Array<HomeLoanOffer>> {
   const auth_token=localStorage.getItem("token");
   console.log("my token", auth_token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
  
    });
    return this.http.get<Array<HomeLoanOffer>>(this.apiUrl);
  }

  

}
