import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'contactus',
    styleUrls: [],
    template: `
      <pagetitle [title]='title'></pagetitle>
    `,
})

export class ContactUsComponent implements OnInit {
    title = "Contact Us";
    ngOnInit(): void {
    }

}
