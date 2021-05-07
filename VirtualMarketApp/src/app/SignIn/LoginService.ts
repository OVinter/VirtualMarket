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
    // let params = new HttpParams().set("model", model); //Create new HttpParams
    // const params = new HttpParams().append('model', model);
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    // console.log(params);
    console.log(model);
    // tslint:disable-next-line:max-line-length
    // return this.http.get<any>(this.UrlLogin + '/login', {headers: new HttpHeaders({ 'Content-Type': 'application/json', params: model })});
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<any>(this.UrlLogin, JSON.stringify(model), httpOptions)
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/home']);
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

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

  // CreateUser(register: Register): any {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   console.log(register);
  //   return this.http.post<Register[]>(this.UrlRegister + '/register', register, httpOptions)
  // }
}
