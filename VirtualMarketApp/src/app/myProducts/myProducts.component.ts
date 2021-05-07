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

  constructor(private getProductsService: GetProductsService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.GetProducts();
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



}
