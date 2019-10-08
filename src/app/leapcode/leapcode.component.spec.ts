import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapcodeComponent } from './leapcode.component';

describe('LeapcodeComponent', () => {
  let component: LeapcodeComponent;
  let fixture: ComponentFixture<LeapcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeapcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
