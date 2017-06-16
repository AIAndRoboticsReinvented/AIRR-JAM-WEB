import { Injectable } from '@angular/core';

import { Property } from './property';
import { FEATURED } from './mock-featured-properties';


@Injectable()
export class FeaturedPropertyService {

    constructor() { }

    getProperties(): Promise<Property[]> {
        return Promise.resolve(FEATURED);
    }

    getProperty(guid: string): Promise<Property> {
        return this.getProperties()
            .then(properties => properties.find(properties => properties.propertyguid === guid));
    }
}
