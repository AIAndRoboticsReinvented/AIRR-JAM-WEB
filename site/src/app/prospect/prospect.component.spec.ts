import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectComponent } from './prospect.component';

describe('ProspectComponent', () => {
  let component: ProspectComponent;
  let fixture: ComponentFixture<ProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
