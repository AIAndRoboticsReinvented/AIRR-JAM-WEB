import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

//import { Property } from './property';
//import { PropertyService } from './property.service';

@Component({
  selector: 'app-buyahome',
  templateUrl: './buyahome.component.html',
  styleUrls: ['./buyahome.component.css']
})

export class BuyahomeComponent implements OnInit {
  title = "Buy A Home";

  constructor(meta: Meta, title: Title) {
      meta.addTags([
          {
              name: 'author', content: 'ibuyasis.com'
          },
          {
              name: 'keywords', content: 'i buy as is, buy a home, buy now, ugly houses, homes for sale, cash now, quick cash, house investment,sell houses online'
          },
          {
              name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
          },
      ])
  }

  ngOnInit() {
  }

}

