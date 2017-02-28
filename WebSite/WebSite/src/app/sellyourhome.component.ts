import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'sellyourhome',
    styleUrls: [],
    template: `
      <pagetitle [title]='title'></pagetitle>
    `,
})

export class SellYourHomeComponent implements OnInit {

    title = "Sell Your Home";
    ngOnInit(): void {
    }

}
