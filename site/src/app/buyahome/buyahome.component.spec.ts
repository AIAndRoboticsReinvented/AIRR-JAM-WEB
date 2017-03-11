import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyahomeComponent } from './buyahome.component';

describe('BuyahomeComponent', () => {
  let component: BuyahomeComponent;
  let fixture: ComponentFixture<BuyahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
