import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Product} from '../shared/Product';
import {Router} from '@angular/router';
import { AddProductService } from './addProductService';

@Component({
  selector: 'app-dummy',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class AddProductComponent implements OnInit {

  model: any = {};

  constructor(private router: Router, private addProductService: AddProductService) { }

  ngOnInit(): void {
  }

  addProduct(): any {
    const idUser = localStorage.getItem('idUser');
    this.addProductService.AddProduct(this.model, idUser).subscribe();
  }
}
