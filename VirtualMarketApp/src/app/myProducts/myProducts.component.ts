import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Product} from '../shared/Product';
import {Router} from '@angular/router';
import {GetProductsService} from './myProductsService';

@Component({
  selector: 'app-dummy',
  templateUrl: './myProducts.component.html',
  styleUrls: ['./myProducts.component.css']
})
export class MyProductsComponent implements OnInit {

  products: any;
  flag: boolean;
  deleteProduct: any;
  productId: number;

  constructor(private getProductsService: GetProductsService, private router: Router) { }

  ngOnInit(): void {
    // this.flag = localStorage.getItem('currentUser');
    this.flag = true;
    if (localStorage.getItem('currentUser') === null) {
      this.flag = false;
    }
    if (this.flag) {
      this.GetProducts();
    } else {
      console.log(localStorage.getItem('currentUser'));
    }
  }

  public GetProducts(): any {
    this.getProductsService.GetProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
        // this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProducts(key: string): void {
    console.log(key);
    const results: Product[] = [];
    for (const product of this.products) {
      if (product.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.productCategory.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.GetProducts();
    }
  }

  public onDeleteProduct(product: Product): void {
    this.getProductsService.deleteProduct(product.id).subscribe(
      (response: void) => {
        console.log(response);
        this.GetProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProduct(): void {
    this.router.navigate(['products/add']);
  }

  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    // if (mode === 'add') {
    //   button.setAttribute('data-target', '#addEmployeeModal');
    // }
    // if (mode === 'edit') {
    //   this.editEmployee = product;
    //   button.setAttribute('data-target', '#updateEmployeeModal');
    // }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }




}
