import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
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
      const token = localStorage.getItem("token");
  
       if (token) {
         const clonedRequest = request.clone({
           headers: request.headers.set('Authorization', `Bearer ${token}`)
         });
         return next.handle(clonedRequest);
       }
  
      if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
        // If we have a token, we set it to the header
        request = request.clone({
           setHeaders: {
             Authorization: sessionStorage.getItem('token') || '{}'
                      //  loggedInUser : email,
                      //  dbLegiId : dbLegiId
         }
          
        });
     }
      //return next.handle(request);
      return next.handle(request).pipe(
        catchError((err) => {
          let message;
          if (err instanceof HttpErrorResponse) {
               if (err.status === 500) {
              message= 'INTERNAL_SERVER_ERROR_MSG';
           }
           else{
            message=err.error.errorMessage[0];
           
           }
        }
        return throwError(message);
      })
       )
      }
    }
