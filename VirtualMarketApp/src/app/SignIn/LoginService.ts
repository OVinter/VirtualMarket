import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Register } from 'src/app/shared/Register';
import {map} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  UrlLogin: string;
  token: string;
  header: any;
  UrlRegister: string;
  errorData: {};
  constructor(private http: HttpClient, private router: Router) {

    this.UrlLogin = 'http://localhost:8080/api/authenticate';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }
  Login(model: Register): any{
    console.log(model);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<any>(this.UrlLogin, JSON.stringify(model), httpOptions)
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user.jwtToken.id_token));
          localStorage.setItem('idUser', JSON.stringify(user.idUser));
          console.log(localStorage.getItem('currentUser'));
          console.log(localStorage.getItem('idUser'));
          this.router.navigate(['/home'])
            .then(() => window.location.reload());
          console.log(user);
        }
      }),
        catchError(this.handleError)
      );
  }

  getAuthorizationToken(): any {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
