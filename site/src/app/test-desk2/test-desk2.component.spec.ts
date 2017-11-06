import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDesk2Component } from './test-desk2.component';

describe('TestDesk2Component', () => {
  let component: TestDesk2Component;
  let fixture: ComponentFixture<TestDesk2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDesk2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDesk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
