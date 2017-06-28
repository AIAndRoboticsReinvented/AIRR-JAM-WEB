import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
    @Input() facebook: {};
    @Input() twitter: {};
    @Input() linkedin: {};
    @Input() googleplus: {} ;
    @Input() youtube: {};   

  constructor() { }

  ngOnInit() {
  }

}
