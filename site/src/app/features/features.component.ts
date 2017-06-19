import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PropertyService } from '../property.service';
import { PropertyAttributes, Property } from '../property';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

    @Input() property: Property;

    ngOnInit(): void {
    }

    constructor(
        private propertyService: PropertyService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
}
