import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'buyahome',
    styleUrls: [],
    template: `
      <pagetitle [title]='title'></pagetitle>
    `,
})

export class BuyAHomeComponent implements OnInit {

    title = "Buy A Home";
    ngOnInit(): void {
    }

}
