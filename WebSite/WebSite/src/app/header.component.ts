import { Component, Input, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    styleUrls: [ './header.component.css' ],
    selector: 'header',
    templateUrl: './header.component.html',
})



export class HeaderComponent implements OnInit {

    ngOnInit(): void {
    }

    @Input() title: '';

    onSelect(newtitle: ''): void {
        this.title = newtitle;
    };
}
