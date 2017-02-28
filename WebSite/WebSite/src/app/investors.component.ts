import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'investors',
    styleUrls: [],
    templateUrl: './investors.component.html',
})

export class InvestorsComponent implements OnInit {
    title = "Investors";
    ngOnInit(): void {
    }

}
