import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LPUXComponent } from './lp-ux.component';

describe('LPUXComponent', () => {
  let component: LPUXComponent;
  let fixture: ComponentFixture<LPUXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LPUXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LPUXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
