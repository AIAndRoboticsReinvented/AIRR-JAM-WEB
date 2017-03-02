import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from './property';
import { PropertyService } from './property.service';


@Component({
    moduleId: module.id,
    selector: 'buyahome',
    styleUrls: [],
    template: `
      <pagetitle [title]='title'></pagetitle>

      <div class="container">
        <properties></properties>
      </div>
    `,
})

export class BuyAHomeComponent implements OnInit {

    title = "Buy A Home";
    ngOnInit(): void {
    }

}
