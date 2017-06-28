import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    facebook= 'https://www.facebook.com/IBuyAsIs/';
    twitter= 'https://twitter.com/ibuyasis';
    linkedin= 'https://www.linkedin.com/in/russ-brantmyer-a874015/?ppe=1';
    googleplus= 'https://plus.google.com/+RussBrantmyerIBuyAsIs';
    youtube= 'https://www.youtube.com/channel/UCdUxeSAgoCbwroNu5OyEpLQ';   


  constructor() { }

  ngOnInit() {
  }

}
