import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSmsBlockedComponent } from './report-sms-blocked.component';

describe('ReportSmsBlockedComponent', () => {
  let component: ReportSmsBlockedComponent;
  let fixture: ComponentFixture<ReportSmsBlockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSmsBlockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSmsBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
