import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSiteContactrequestsComponent } from './report-site-contactrequests.component';

describe('ReportSiteContactrequestsComponent', () => {
  let component: ReportSiteContactrequestsComponent;
  let fixture: ComponentFixture<ReportSiteContactrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSiteContactrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSiteContactrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
