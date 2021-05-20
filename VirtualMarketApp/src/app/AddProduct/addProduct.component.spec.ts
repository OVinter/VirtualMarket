import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './addProduct.component';
import {GetProductsService} from '../Home/getProductsService';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Product} from '../shared/Product';
import {AddProductService} from './addProductService';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let product: Product;
  let service: AddProductService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],
      providers: [GetProductsService, HttpClient],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
    service = TestBed.inject(AddProductService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AddProducts() should call http Post method for the given route', () => {
    const idUser = 1000;
    product = {id: 123,
      productName: 'aaa',
      productCategory: 'aaa',
      productDescription: 'aaa',
      productPhoto: 'aaa',
      userPhone: '5555'};

    service.AddProduct(product, idUser).subscribe((p) => {
      expect(p).toEqual(product);
    });

    const req = httpMock.match('http://localhost:8080/api/users/' + idUser + '/products');
    expect(req[0].request.method).toEqual('POST');
    httpMock.verify();

  });
});
