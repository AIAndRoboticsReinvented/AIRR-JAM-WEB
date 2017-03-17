import { TestBed, inject } from '@angular/core/testing';

import { SqueezePageService } from './squeeze-page.service';

describe('SqueezePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqueezePageService]
    });
  });

  it('should ...', inject([SqueezePageService], (service: SqueezePageService) => {
    expect(service).toBeTruthy();
  }));
});
