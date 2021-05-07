import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProducts } from './myProducts.component';

describe('MyProductsComponent', () => {
  let component: MyProducts;
  let fixture: ComponentFixture<MyProducts>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProducts ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
