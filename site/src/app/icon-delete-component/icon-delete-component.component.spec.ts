import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDeleteComponentComponent } from './icon-delete-component.component';

describe('IconDeleteComponentComponent', () => {
  let component: IconDeleteComponentComponent;
  let fixture: ComponentFixture<IconDeleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDeleteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDeleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
