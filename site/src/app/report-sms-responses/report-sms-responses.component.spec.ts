import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSmsResponsesComponent } from './report-sms-responses.component';

describe('ReportSmsResponsesComponent', () => {
  let component: ReportSmsResponsesComponent;
  let fixture: ComponentFixture<ReportSmsResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSmsResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSmsResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
