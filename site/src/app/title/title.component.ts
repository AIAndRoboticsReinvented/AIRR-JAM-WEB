import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './title.component.css'
  ]
})
export class TitleComponent implements OnInit {

  constructor() { }
  @Input() title:string = ''

  ngOnInit() {
  }

}
