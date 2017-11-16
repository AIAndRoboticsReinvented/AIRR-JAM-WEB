import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [PropertyService]
})
export class ModalComponent implements OnInit {
    properties: Property[];
    selectedProperty: Property;

    constructor(
        private router: Router,
        private propertyService: PropertyService) { }

    onSelect(property: Property): void {
        this.selectedProperty = property;
    }

    getProperties(): void {
        this.propertyService.getProperties().then(properties => this.properties = properties);
    }

    gotoDetail(): void {
        this.router.navigate(['/propertydetail', this.selectedProperty.propertyid]);
    }

    ngOnInit(): void {
        this.getProperties();
    }


    property: Property;
}
