import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtnavComponent } from './ttnav.component';

describe('TtnavComponent', () => {
  let component: TtnavComponent;
  let fixture: ComponentFixture<TtnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
