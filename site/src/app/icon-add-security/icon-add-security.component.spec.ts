import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAddSecurityComponent } from './icon-add-security.component';

describe('IconAddSecurityComponent', () => {
  let component: IconAddSecurityComponent;
  let fixture: ComponentFixture<IconAddSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAddSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAddSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
