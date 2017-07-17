import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSmsBlockreasonsComponent } from './report-sms-blockreasons.component';

describe('ReportSmsBlockreasonsComponent', () => {
  let component: ReportSmsBlockreasonsComponent;
  let fixture: ComponentFixture<ReportSmsBlockreasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSmsBlockreasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSmsBlockreasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
