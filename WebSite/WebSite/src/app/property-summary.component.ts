import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PropertyService } from './property.service';
import { PropertyAttributes, Property } from './property';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'property-summary',
    styleUrls: ['./property-summary.component.css'],
    templateUrl: './property-summary.component.html',

})

export class PropertySummaryComponent implements OnInit {
    @Input() property: Property;

    ngOnInit(): void {
    }

    constructor(
        private propertyService: PropertyService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
}
