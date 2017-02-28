import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'home',
    styleUrls: [],
    template: `
      <pagetitle [title]='title'></pagetitle>
    `,
})

export class HomeComponent implements OnInit {
    title = "Home";
    ngOnInit(): void {
    }

}
