import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
    ],
    providers: [],
    declarations: [ProspectComponent],
    bootstrap: [ProspectComponent]
})
@Component({
    selector: 'app-prospect',
    templateUrl: './prospect.component.html',
    styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {
    latitude: number;
    longitude: number;
    coords:{};
    constructor() {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                alert('Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude);
                //this.latitude = position.coords.latitude;
                //this.longitude = position.coords.longitude;
                this.coords = position.coords;
                console.log(this.coords);
                //console.log(this.latitude);
                //console.log(this.longitude);

            },
            function () {
                alert('Error locating your device');
            },
            { enableHighAccuracy: true });
    }

    ngOnInit() {

    }
}
