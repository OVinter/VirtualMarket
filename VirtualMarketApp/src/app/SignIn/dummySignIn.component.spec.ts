import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySignInComponent } from './dummySignIn.component';

describe('DummySignInComponent', () => {
  let component: DummySignInComponent;
  let fixture: ComponentFixture<DummySignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummySignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummySignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
