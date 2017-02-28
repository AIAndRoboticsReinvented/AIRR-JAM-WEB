import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'wholesale',
    styleUrls: [],
    template: `
      <pagetitle [title]='title'></pagetitle>
    `,
})

export class WholesaleComponent implements OnInit {
    title = "Wholesale";
    ngOnInit(): void {
    }

}
