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
export class GetProductsService {

  UrlUsers: string;
  header: any;
  errorData: {};

  constructor(private http: HttpClient, private router: Router) {

    this.UrlUsers = 'http://localhost:8080/api/users/products';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  GetProducts(): any {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.get<any>(this.UrlUsers, httpOptions);
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

}
