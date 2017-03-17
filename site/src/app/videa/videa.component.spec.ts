import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideaComponent } from './videa.component';

describe('VideaComponent', () => {
  let component: VideaComponent;
  let fixture: ComponentFixture<VideaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
