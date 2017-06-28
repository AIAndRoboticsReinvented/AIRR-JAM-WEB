import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    facebook = 'https://www.facebook.com/IBuyAsIs/';
    twitter = 'https://twitter.com/ibuyasis';
    linkedin = 'https://www.linkedin.com/in/russ-brantmyer-a874015/?ppe=1';
    googleplus = 'https://plus.google.com/+RussBrantmyerIBuyAsIs';
    youtube = 'https://www.youtube.com/channel/UCdUxeSAgoCbwroNu5OyEpLQ';  

  constructor() { }

  ngOnInit() {
  }

}
