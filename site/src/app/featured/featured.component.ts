import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { PropertyService } from '../property.service';
import { PropertyAttributes, Property } from '../property';


@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
    properties: Property[];
    constructor(
        private router: Router,
        private propertyService:PropertyService) { }

    getFeatured(): void {
        this.propertyService.getFeaturedProperties().then(properties => this.properties = properties);
    }




    ngOnInit(): void {
        this.getFeatured();
  }

}