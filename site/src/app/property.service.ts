﻿import { Injectable } from '@angular/core';

import { Property } from './property';
import { PROPERTIES, FEATUREDPROPERTIES } from './mock-properties';


@Injectable()
export class PropertyService {

  constructor() { }

  getProperties(): Promise<Property[]> {
      return Promise.resolve(PROPERTIES);
  }
    getFeaturedProperties(): Promise<Property[]> {
        return Promise.resolve(FEATUREDPROPERTIES);
    }
  getProperty(guid: string): Promise<Property> {
      return this.getProperties()
          .then(properties => properties.find(properties => properties.propertyid === guid));
  }
}
