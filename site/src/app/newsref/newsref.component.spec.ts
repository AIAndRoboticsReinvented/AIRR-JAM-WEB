import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsrefComponent } from './newsref.component';

describe('NewsrefComponent', () => {
  let component: NewsrefComponent;
  let fixture: ComponentFixture<NewsrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
