import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifytechComponent } from './verifytech.component';

describe('VerifytechComponent', () => {
  let component: VerifytechComponent;
  let fixture: ComponentFixture<VerifytechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifytechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifytechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
