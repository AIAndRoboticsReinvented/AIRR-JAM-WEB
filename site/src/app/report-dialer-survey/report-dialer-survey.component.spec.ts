import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDialerSurveyComponent } from './report-dialer-survey.component';

describe('ReportDialerSurveyComponent', () => {
  let component: ReportDialerSurveyComponent;
  let fixture: ComponentFixture<ReportDialerSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDialerSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDialerSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
