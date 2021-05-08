import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag: any;

  constructor() { }

  ngOnInit(): void {
    this.flag = true;
    console.log(localStorage.getItem('currentUser') === null);
    if (localStorage.getItem('currentUser') === null) {
      this.flag = false;
    }
    console.log(this.flag);
  }

}
