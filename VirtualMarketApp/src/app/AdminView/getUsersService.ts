import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  UrlUsers: string;
  header: any;
  errorData: {};

  constructor(private http: HttpClient, private router: Router) {

    this.UrlUsers = 'http://localhost:8080/api/users';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  GetUsers(): any {
    const idToken = localStorage.getItem('currentUser');
    const idUser = localStorage.getItem('idUser');
    console.log(idToken);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    console.log(httpOptions);
    return this.http.get<any>(this.UrlUsers, httpOptions);
  }
}
