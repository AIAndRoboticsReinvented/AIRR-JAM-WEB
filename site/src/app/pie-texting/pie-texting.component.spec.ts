import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTextingComponent } from './pie-texting.component';

describe('PieTextingComponent', () => {
  let component: PieTextingComponent;
  let fixture: ComponentFixture<PieTextingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieTextingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieTextingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
