import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCompanyComponent } from './icon-company.component';

describe('IconCompanyComponent', () => {
  let component: IconCompanyComponent;
  let fixture: ComponentFixture<IconCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
