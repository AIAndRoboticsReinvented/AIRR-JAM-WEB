import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './tool-bar.component.css'
  ]
})
export class ToolBarComponent implements OnInit {

  @Input() thedate: string = moment().format('YYYY-MM-DD');
  @Output() newthedate: EventEmitter<string> = new EventEmitter<string>(); // Provide a method to send the value to the parent.

  constructor() { }


  public datechange(): void {
      this.newthedate.emit(this.thedate);   /// Send the new value back up the line.
  }

  ngOnInit() {
  }

}
