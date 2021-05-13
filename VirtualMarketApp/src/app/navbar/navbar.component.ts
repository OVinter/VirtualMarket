import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag: any;
  flagAdmin: boolean;

  constructor() { }

  ngOnInit(): void {

    this.flagAdmin = true;
    if (localStorage.getItem('currentUser')) {
      let token = JSON.parse(localStorage.getItem('currentUser'));
      try {
        token = jwt_decode(token);
        console.log(token);
      } catch (Error) {
        console.log('smh wrong with jwt_decode');
      }

      if (token.auth === 'ROLE_ADMIN,ROLE_USER') {
        this.flagAdmin = false;
      }
    }

    this.flag = true;
    if (localStorage.getItem('currentUser') === null) {
      this.flag = false;
    }
    console.log(this.flag);
  }

}
