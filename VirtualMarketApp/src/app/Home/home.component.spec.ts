import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Router} from '@angular/router';
import {GetProductsService} from './getProductsService';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Product} from '../shared/Product';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let product: Product;
  let service: GetProductsService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [GetProductsService, HttpClient],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    service = TestBed.inject(GetProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('GetProducts() should call http Get method for the given route', () => {
    product = {id: 123,
      productName: 'aaa',
      productCategory: 'aaa',
      productDescription: 'aaa',
      productPhoto: 'aaa',
      userPhone: '5555'};

    service.GetProducts().subscribe((p) => {
      expect(p).toEqual(product);
    });

    const req = httpMock.match('http://localhost:8080/api/products');
    expect(req[0].request.method).toEqual('GET');
    httpMock.verify();

  });
});
