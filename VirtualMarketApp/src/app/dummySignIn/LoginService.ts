import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Register } from 'src/app/shared/Register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  UrlLogin: string;
  token: string;
  header: any;
  UrlRegister: string;
  constructor(private http: HttpClient) {

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
    return this.http.post<any>(this.UrlLogin, JSON.stringify(model), httpOptions);
  }

  // CreateUser(register: Register): any {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   console.log(register);
  //   return this.http.post<Register[]>(this.UrlRegister + '/register', register, httpOptions)
  // }
}
