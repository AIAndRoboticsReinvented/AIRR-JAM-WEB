import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

export class AboutComponent implements OnInit {
    tiles: {};
    title = "About";
    constructor(meta: Meta, title: Title) {
        meta.addTags([

            {
                name: 'author', content: 'ibuyasis.com'
            },
            {
                name: 'keywords', content: 'i buy as is, about i buy as is, i buy as is team, ibai team, ibai about, i buy as is about'
            },
            {
                name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
            },
        ])

    }

    ngOnInit() {
        this.tiles = [
            {
                img: 'assets/images/slideshow/WWA-2-nologo.jpg', title: '', caption: '', slide: 0
            },
        ];
  }

}

