import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
    title = "Frequently Asked Questions";
    constructor(meta: Meta, title: Title) {
        meta.addTags([
            {
                name: 'author', content: 'ibuyasis.com'
            },
            {
                name: 'keywords', content: 'i buy as is, homes faqs, ugly houses, homes for sale, cash now, quick cash, house investment,sell houses online'
            },
            {
                name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
            },
        ])
    }
  
  ngOnInit() {
  }

}
