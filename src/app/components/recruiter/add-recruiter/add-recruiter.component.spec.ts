import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecruiterComponent } from './add-recruiter.component';

describe('AddRecruiterComponent', () => {
  let component: AddRecruiterComponent;
  let fixture: ComponentFixture<AddRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
