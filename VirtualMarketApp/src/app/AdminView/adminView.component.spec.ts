import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComponent } from './adminView.component';
import {GetProductsService} from '../Home/getProductsService';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Product} from '../shared/Product';
import {AddProductService} from '../AddProduct/addProductService';
import {GetUsersService} from './getUsersService';
import {User} from '../shared/User';

describe('AdminViewComponent', () => {
  let component: AdminViewComponent;
  let fixture: ComponentFixture<AdminViewComponent>;
  let service: GetUsersService;
  let httpMock: HttpTestingController;
  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewComponent ],
      providers: [GetUsersService, HttpClient],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
    service = TestBed.inject(GetUsersService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
