import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEditComponentComponent } from './icon-edit-component.component';

describe('IconEditComponentComponent', () => {
  let component: IconEditComponentComponent;
  let fixture: ComponentFixture<IconEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
