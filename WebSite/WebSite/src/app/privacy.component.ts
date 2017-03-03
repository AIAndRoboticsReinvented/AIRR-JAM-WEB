import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'privacy',
    styleUrls: ['./privacy.component.css'],
    templateUrl: './privacy.component.html',
})

export class PrivacyComponent implements OnInit {
    title = "Privacy Statement";

    ngOnInit(): void {
    }

}
