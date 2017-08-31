import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopletrackComponent } from './peopletrack.component';

describe('PeopletrackComponent', () => {
  let component: PeopletrackComponent;
  let fixture: ComponentFixture<PeopletrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopletrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopletrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
