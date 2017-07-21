import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSmsSendStatsComponent } from './report-sms-send-stats.component';

describe('ReportSmsSendStatsComponent', () => {
  let component: ReportSmsSendStatsComponent;
  let fixture: ComponentFixture<ReportSmsSendStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSmsSendStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSmsSendStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
