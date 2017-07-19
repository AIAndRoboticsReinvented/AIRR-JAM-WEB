import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY'
        })
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
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
  
    constructor() {

    }

    ngOnInit() {

    }

}