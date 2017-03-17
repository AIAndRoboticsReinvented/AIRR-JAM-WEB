import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ContactRequest } from '../contact-request';
import { ContactRequestService } from '../contact-request.service';

@Component({
  selector: 'app-contact-request',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.css'],
  providers: [ContactRequestService],
})
export class ContactRequestComponent implements OnInit {
  
    private response = { message: 'Waiting for user submittion.' };
    private displayresponse = false;

    constructor(
      private contactRequestService: ContactRequestService ) { }

  @Input() contactrequest : ContactRequest;

  
  isAlternate(checkvalue) { return checkvalue != ''; };
  isRequired(checkvalue) { return checkvalue === '1'; };
  isVisible(checkvalue) { return checkvalue == '1'; };

  onRequestClick(): void {
      console.log(this.contactrequest);
      this.contactRequestService.postRequest(this.contactrequest)
          .subscribe(
          data => this.response = JSON.parse(data.RequestResult),
          error => {
              console.log(error);
          },
          () => {
              this.displayresponse = true;
              console.log("Request Posted");
          });
  };

  ngOnInit() {
  }

}










