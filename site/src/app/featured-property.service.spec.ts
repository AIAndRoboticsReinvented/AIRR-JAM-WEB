import { TestBed, inject } from '@angular/core/testing';

import { FeaturedPropertyService } from './featured-property.service';

describe('FeaturedService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FeaturedPropertyService]
        });
    });

    it('should ...', inject([FeaturedPropertyService], (service: FeaturedPropertyService) => {
        expect(service).toBeTruthy();
    }));
});
