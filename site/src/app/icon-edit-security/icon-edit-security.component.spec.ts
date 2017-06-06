import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEditSecurityComponent } from './icon-edit-security.component';

describe('IconEditSecurityComponent', () => {
  let component: IconEditSecurityComponent;
  let fixture: ComponentFixture<IconEditSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconEditSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEditSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
