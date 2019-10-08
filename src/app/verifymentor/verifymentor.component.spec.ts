import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifymentorComponent } from './verifymentor.component';

describe('VerifymentorComponent', () => {
  let component: VerifymentorComponent;
  let fixture: ComponentFixture<VerifymentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifymentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifymentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
