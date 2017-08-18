import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotableComponent } from './hotable.component';

describe('HotableComponent', () => {
  let component: HotableComponent;
  let fixture: ComponentFixture<HotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
