import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandyComponent } from './landy.component';

describe('LandyComponent', () => {
  let component: LandyComponent;
  let fixture: ComponentFixture<LandyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
