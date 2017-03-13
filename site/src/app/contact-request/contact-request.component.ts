import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ContactRequest } from '../contact-request';

@Component({
  selector: 'app-contact-request',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.css']
})
export class ContactRequestComponent implements OnInit {

  constructor() { }

  @Input() contactrequest : ContactRequest;

  isVisible(checkvalue){ return checkvalue === '1'};


  ngOnInit() {
  }

}










