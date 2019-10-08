import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupmentorComponent } from './signupmentor.component';

describe('SignupmentorComponent', () => {
  let component: SignupmentorComponent;
  let fixture: ComponentFixture<SignupmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
