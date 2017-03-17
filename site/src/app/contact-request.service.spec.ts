import { TestBed, inject } from '@angular/core/testing';

import { ContactRequestService } from './contact-request.service';

describe('ContactRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactRequestService]
    });
  });

  it('should ...', inject([ContactRequestService], (service: ContactRequestService) => {
    expect(service).toBeTruthy();
  }));
});
