import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Product} from '../shared/Product';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import { GetUsersService } from './getUsersService';


@Component({
  selector: 'app-dummy',
  templateUrl: './adminView.component.html',
  styleUrls: ['./adminView.component.css']
})


export class AdminViewComponent implements OnInit {

  flag: any;
  users: any;
  constructor(private getUsersService: GetUsersService) {
  }

  ngOnInit(): void {
    let token = JSON.parse(localStorage.getItem('currentUser'));
    try {
      token = jwt_decode(token);
      console.log(token);
    } catch (Error) {
      console.log('smh wrong with jwt_decode');
    }
    this.flag = true;
    if (localStorage.getItem('currentUser') === null || token.auth === 'ROLE_USER') {
      this.flag = false;
    }
    if (this.flag) {
      this.getUsers();
    } else {
      console.log(localStorage.getItem('currentUser'));
    }
  }

  getUsers(): void {
    this.getUsersService.GetUsers().subscribe(
      (response: Product[]) => {
        this.users = response;
        console.log(this.users);
        // this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
