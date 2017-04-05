import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectPropertyComponent } from './prospect-property.component';

describe('ProspectPropertyComponent', () => {
  let component: ProspectPropertyComponent;
  let fixture: ComponentFixture<ProspectPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
