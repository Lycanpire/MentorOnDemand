import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcurrenttrainingComponent } from './mentorcurrenttraining.component';

describe('MentorcurrenttrainingComponent', () => {
  let component: MentorcurrenttrainingComponent;
  let fixture: ComponentFixture<MentorcurrenttrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcurrenttrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcurrenttrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
