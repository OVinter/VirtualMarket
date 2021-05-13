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
export class GetMyProductsService {

  UrlMyProducts: string;
  header: any;
  errorData: {};

  constructor(private http: HttpClient, private router: Router) {

    this.UrlMyProducts = 'http://localhost:8080/api/users/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  GetProducts(idUser: any): any {
    const idToken = localStorage.getItem('currentUser');
    console.log(idToken);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    console.log(this.UrlMyProducts + idUser + '/products');
    console.log(httpOptions);
    return this.http.get<any>(this.UrlMyProducts + idUser + '/products', httpOptions);
  }

  public deleteProduct(productId: number, idUser: any): Observable<void> {
    const idToken = localStorage.getItem('currentUser');
    console.log(productId);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    return this.http.delete<void>(`${this.UrlMyProducts}${idUser}/products/${productId}`, httpOptions);
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
