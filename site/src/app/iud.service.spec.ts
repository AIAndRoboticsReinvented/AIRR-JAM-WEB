import { TestBed, inject } from '@angular/core/testing';

import { IudService } from './iud.service';

describe('IudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IudService]
    });
  });

  it('should be created', inject([IudService], (service: IudService) => {
    expect(service).toBeTruthy();
  }));
});
