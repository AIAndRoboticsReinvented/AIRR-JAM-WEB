import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobimenuComponent } from './mobimenu.component';

describe('MobimenuComponent', () => {
  let component: MobimenuComponent;
  let fixture: ComponentFixture<MobimenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobimenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
