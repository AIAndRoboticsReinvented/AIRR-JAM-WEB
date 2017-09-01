import { TestBed, inject } from '@angular/core/testing';

import { StatemachineService } from './statemachine.service';

describe('StatemachineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatemachineService]
    });
  });

  it('should be created', inject([StatemachineService], (service: StatemachineService) => {
    expect(service).toBeTruthy();
  }));
});
