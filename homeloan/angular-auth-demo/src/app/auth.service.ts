import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  static readonly TOKEN="testtoken";
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:9090/auth/login';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin":"*",
    })
  };


  // login(credentials: any) {
  //   return this.http.post(this.apiUrl, credentials);
  // }
  login(username: string, password: string): Observable<any> {

    return this.http.post(this.apiUrl, { username, password });
  }

  getAuthToken(): string{
    return AuthService.TOKEN;
  }
}