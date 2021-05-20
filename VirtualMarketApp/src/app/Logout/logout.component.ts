import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Product} from '../shared/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dummy',
  template: `
    <div>hello</div>
  `,
  // styleUrls: ['./home.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    localStorage.getItem('currentUser');
    localStorage.getItem('idUser');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('idUser');
    this.router.navigate(['signup'])
      .then(() => window.location.reload());
  }
}
