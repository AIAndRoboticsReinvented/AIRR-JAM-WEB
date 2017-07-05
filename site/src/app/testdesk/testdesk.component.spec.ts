import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdeskComponent } from './testdesk.component';

describe('TestdeskComponent', () => {
  let component: TestdeskComponent;
  let fixture: ComponentFixture<TestdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
