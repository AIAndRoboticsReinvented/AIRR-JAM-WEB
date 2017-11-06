import { Component, OnInit } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  title = "Privacy Statement";

  constructor(meta: Meta, title: Title) {
      meta.addTags([

          {
              name: 'author', content: 'ibuyasis.com'
          },
          {
              name: 'keywords', content: 'i buy as is, i buy as is privacy statement, ibai legal'
          },
          {
              name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
          },
      ])

  }

  ngOnInit() {
  }

}
