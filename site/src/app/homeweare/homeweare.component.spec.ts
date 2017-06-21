import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeweareComponent } from './homeweare.component';

describe('HomeweareComponent', () => {
  let component: HomeweareComponent;
  let fixture: ComponentFixture<HomeweareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeweareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeweareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
