import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySummaryComponent } from './property-summary.component';

describe('PropertySummaryComponent', () => {
  let component: PropertySummaryComponent;
  let fixture: ComponentFixture<PropertySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
