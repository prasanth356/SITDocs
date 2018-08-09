import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterReportComponent } from './recruiter-report.component';

describe('RecruiterReportComponent', () => {
  let component: RecruiterReportComponent;
  let fixture: ComponentFixture<RecruiterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
