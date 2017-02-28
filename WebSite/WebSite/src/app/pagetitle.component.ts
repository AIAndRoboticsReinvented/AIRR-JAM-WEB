import { Component, Input, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    styleUrls: [ './pagetitle.component.css' ],
    selector: 'pagetitle',
    templateUrl: './pagetitle.component.html',
})



export class PageTitleComponent implements OnInit {

    
    ngOnInit(): void {
    }

    @Input() title: '';
}
