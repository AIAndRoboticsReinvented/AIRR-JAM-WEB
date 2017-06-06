import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDeleteSecurityComponent } from './icon-delete-security.component';

describe('IconDeleteSecurityComponent', () => {
  let component: IconDeleteSecurityComponent;
  let fixture: ComponentFixture<IconDeleteSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDeleteSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDeleteSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
