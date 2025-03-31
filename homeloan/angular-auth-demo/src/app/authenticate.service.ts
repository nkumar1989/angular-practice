import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:9090/auth/login';
  //let auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc0MzQxOTMyMSwiZXhwIjoxNzQzNDIyOTIxfQ.hft8dujaLngRAaEW5FJEKtH1NuKM6jW-47E5sIaYHtY";

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin":"*",
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc0MzQxOTMyMSwiZXhwIjoxNzQzNDIyOTIxfQ.hft8dujaLngRAaEW5FJEKtH1NuKM6jW-47E5sIaYHtY`
    })
  };



}
