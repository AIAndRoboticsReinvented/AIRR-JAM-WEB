import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImguploadrequestComponent } from './imguploadrequest.component';

describe('ImguploadrequestComponent', () => {
  let component: ImguploadrequestComponent;
  let fixture: ComponentFixture<ImguploadrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImguploadrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImguploadrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
