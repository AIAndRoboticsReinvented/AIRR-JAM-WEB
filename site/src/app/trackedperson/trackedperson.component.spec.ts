import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedpersonComponent } from './trackedperson.component';

describe('TrackedpersonComponent', () => {
  let component: TrackedpersonComponent;
  let fixture: ComponentFixture<TrackedpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackedpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
