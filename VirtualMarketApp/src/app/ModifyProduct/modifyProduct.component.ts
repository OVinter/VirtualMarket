import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Product} from '../shared/Product';
import {Router} from '@angular/router';
import { ModifyProductService } from './modifyProductService';
import {AddProductModel} from '../shared/AddProductModel';

@Component({
  selector: 'app-dummy',
  templateUrl: './modifyProduct.component.html',
  styleUrls: ['./modifyProduct.component.css']
})
export class ModifyProductComponent implements OnInit {

  model: any = {};
  modify: any = {};
  flag: any;

  constructor(private router: Router, private addProductService: ModifyProductService) {
    this.modify = JSON.parse(localStorage.getItem('modifyProduct'));
  }

  ngOnInit(): void {
    if (this.modify) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  modifyProduct(): any {
    console.log(this.model);
    console.log(this.modify);
    if (!this.model.productName) {
      this.model.productName = this.modify.productName;
    }
    if (!this.model.productCategory) {
      this.model.productCategory = this.modify.productCategory;
    }
    if (!this.model.productPhoto) {
      this.model.productPhoto = this.modify.productPhoto;
    }
    if (!this.model.productDescription) {
      this.model.productDescription = this.modify.productDescription;
    }
    console.log(this.model);
    localStorage.removeItem('modifyProduct');
    this.addProductService.ModifyProduct(this.model, this.modify.id).subscribe();
  }
}
