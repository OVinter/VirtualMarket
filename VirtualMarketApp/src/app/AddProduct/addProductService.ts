import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Register} from '../shared/Register';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  UrlAddProduct: string;
  header: any;
  errorData: {};

  constructor(private http: HttpClient, private router: Router) {

    this.UrlAddProduct = 'http://localhost:8080/api/users';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  AddProduct(model: any): any{

    console.log(model);
    const idToken = localStorage.getItem('currentUser');
    const idUser = localStorage.getItem('idUser');
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };

    return this.http.post<any>(`${this.UrlAddProduct}/${idUser}/products`, JSON.stringify(model), httpOptions)
      .pipe(map(product => {
          if (product) {
            this.router.navigate(['/products']);
            console.log(product);
          }
        }),
        catchError(this.handleError)
      );
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
