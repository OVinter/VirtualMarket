import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComponent } from './adminView.component';

describe('HomeComponent', () => {
  let component: AdminViewComponent;
  let fixture: ComponentFixture<AdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewComponent ]
    })
      .compileComponents();
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
