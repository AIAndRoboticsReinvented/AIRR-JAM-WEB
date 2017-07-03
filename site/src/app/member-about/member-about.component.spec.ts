import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAboutComponent } from './member-about.component';

describe('MemberAboutComponent', () => {
  let component: MemberAboutComponent;
  let fixture: ComponentFixture<MemberAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
