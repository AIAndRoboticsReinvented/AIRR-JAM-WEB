import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAddComponentComponent } from './icon-add-component.component';

describe('IconAddComponentComponent', () => {
  let component: IconAddComponentComponent;
  let fixture: ComponentFixture<IconAddComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAddComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
