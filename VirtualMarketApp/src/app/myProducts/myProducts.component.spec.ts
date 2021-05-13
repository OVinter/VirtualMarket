import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MyProductsComponent} from './myProducts.component';
import {GetProductsService} from '../Home/getProductsService';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Product} from '../shared/Product';
import {AddProductService} from '../AddProduct/addProductService';
import {GetMyProductsService} from './myProductsService';
import {inject} from '@angular/core';

describe('MyProductsComponent', () => {
  let component: MyProductsComponent;
  let fixture: ComponentFixture<MyProductsComponent>;
  let product: Product;
  let service: GetMyProductsService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProductsComponent ],
      providers: [GetMyProductsService, HttpClient],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
    })
      .compileComponents();
    service = TestBed.inject(GetMyProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('GetMyProducts() should call http Get method for the given route', () => {
    const idUser = 1000;
    product = {id: 123,
      productName: 'aaa',
      productCategory: 'aaa',
      productDescription: 'aaa',
      productPhoto: 'aaa',
      userPhone: '5555'};

    service.GetProducts(idUser).subscribe((p) => {
      expect(p).toEqual(product);
    });

    const req = httpMock.match('http://localhost:8080/api/users/' + idUser + '/products');
    expect(req[0].request.method).toEqual('GET');
    httpMock.verify();

  });

  it('deleteProduct() should call http Delete method for the given route', () => {
    const idUser = 1000;
    product = {id: 123,
      productName: 'aaa',
      productCategory: 'aaa',
      productDescription: 'aaa',
      productPhoto: 'aaa',
      userPhone: '5555'};

    service.deleteProduct(product.id, idUser).subscribe((p) => {
      expect(p).toEqual(null);
    });

    const req = httpMock.match('http://localhost:8080/api/users/' + idUser + '/products/' + product.id);
    expect(req[0].request.method).toEqual('DELETE');
    httpMock.verify();

  });
});
