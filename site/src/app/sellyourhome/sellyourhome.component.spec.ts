import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellyourhomeComponent } from './sellyourhome.component';

describe('SellyourhomeComponent', () => {
  let component: SellyourhomeComponent;
  let fixture: ComponentFixture<SellyourhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellyourhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellyourhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
