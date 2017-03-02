import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'terms',
    styleUrls: ['./terms.component.css'],
    templateUrl: './terms.component.html',
})

export class TermsComponent implements OnInit {
    title = "Terms";

    ngOnInit(): void {
    }

}
