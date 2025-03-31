import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  static readonly TOKEN="testtoken";
  constructor(private httpClient: HttpClient) {}
  private authenticationApi = 'http://localhost:9090/auth/login';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin":"*",
    })
  };

  // login(username: string, password: string): Observable<any> {

  //   return this.http.post(this.apiUrl, { username, password });
  // }
  private user = new  User;

  login(username: string, password: string) {

    //password="password";
      this.user.password = password;
      this.user.username = username;
      return this.httpClient
        .post<any>(`${this.authenticationApi}`,this.user )
        .pipe(
          map(userData => {
           // console.log('userData==',userData);
            sessionStorage.setItem("username", username);
            let tokenStr = "Bearer " + userData.jwttoken;
            sessionStorage.setItem("token", tokenStr);
            return userData;
          })
        );
  }


  getAuthToken(): string{
    return AuthService.TOKEN;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
   // console.log(!(user === null));
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem("username");
     sessionStorage.removeItem("token");
     localStorage.removeItem("activeUserObject");
  }
}
export class User{
  username!:string;
  password!:string;
}