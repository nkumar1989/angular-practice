import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private httpClient:HttpClient){}
  httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin":"*",
      })
    };
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('token::'+token)

    // Clone the request to add the Authorization header
    if (token) {
      request = request.clone({
        setHeaders: {
          //Authorization: ` ${token}`,
          Authorization: 'Bearer '+ token
        },
      });
    }
    return next.handle(request);
  }
}
