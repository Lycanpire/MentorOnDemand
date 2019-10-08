import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninmentorComponent } from './signinmentor.component';

describe('SigninmentorComponent', () => {
  let component: SigninmentorComponent;
  let fixture: ComponentFixture<SigninmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
