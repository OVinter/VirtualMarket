import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './LoginService';

@Component({
  selector: 'app-register-form',
  templateUrl: './signIn.component.html',
  styleUrls: ['./css/main.css', './css/util.css']
})
export class SignInComponent implements OnInit {

  model: any = {};

  errorMessage: string;

  // loginService: LoginService;

  constructor(private router: Router, private loginService: LoginService) {
    // this.loginService = loginService;
  }


  ngOnInit(): void {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }

  login(): any {
    this.loginService.Login(this.model).subscribe();
  }

}
