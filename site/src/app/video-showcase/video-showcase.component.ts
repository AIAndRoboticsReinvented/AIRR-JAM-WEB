import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'; 

import { ContactRequest } from '../contact-request';
import { ContactRequestComponent } from '../contact-request/contact-request.component';


@Component({
  selector: 'app-video-showcase',
  templateUrl: './video-showcase.component.html',
  styleUrls: ['./video-showcase.component.css']
})
export class VideoShowcaseComponent implements OnInit {
    @Input() background: '';
    @Input() video: '';
    @Input() poster: '';
    @Input() title: '';   

    url: SafeResourceUrl;
    constructor(
        private sanitizer: DomSanitizer) {
        this.url = sanitizer.bypassSecurityTrustResourceUrl('http://www.rapidfiredomains.com');
    }

    trust(urltotrust) {
        console.log(urltotrust);
        return this.sanitizer.bypassSecurityTrustResourceUrl(urltotrust);
        
    }


  ngOnInit() {
  }

  // Default contact request for an investor
  contactrequest: ContactRequest = {
      RequestSource: this.title,
      FirstName: '',
      LastName: '',
      EMail: '',
      PhoneHome: '',
      PhoneCell: '',
      PhoneWork: '',
      PhoneFax: '',

      MailingAddress1: '',
      MailingAddress2: '',
      MailingCity: '',
      MailingState: '',
      MailingZip: '',

      PropertyAddress1: '',
      PropertyAddress2: '',
      PropertyCity: '',
      PropertyState: '',
      PropertyZip: '',

      Funds: '',
      Personal: '',
      IRA: '',
      Business: '',
      Available: '',
      Terms: '',
      Payments: '',
      Learn: '',
      Comments: '',

      //Question: '',
      //Wants: '',
      //Needs: '',
      //Region: '',


      visibility: {
          RequestSource: '0',
          FirstName: '1',
          LastName: '1',
          EMail: '1',
          PhoneHome: '0',
          PhoneCell: '1',
          PhoneWork: '0',
          PhoneFax: '0',

          MailingAddress1: '0',
          MailingAddress2: '0',
          MailingCity: '0',
          MailingState: '0',
          MailingZip: '0',

          PropertyAddress1: '0',
          PropertyAddress2: '0',
          PropertyCity: '0',
          PropertyState: '0',
          PropertyZip: '0',

          Funds: '0',
          Personal: '0',
          IRA: '0',
          Business: '0',
          Available: '0',
          Terms: '0',
          Payments: '0',
          Learn: '0',
          Comments: '0',
      },
      alternate: {
          RequestSource: '',
          FirstName: '',
          LastName: '',
          EMail: '',
          PhoneHome: '',
          PhoneCell: '',
          PhoneWork: '',
          PhoneFax: '',

          MailingAddress1: '',
          MailingAddress2: '',
          MailingCity: '',
          MailingState: '',
          MailingZip: '',

          PropertyAddress1: '',
          PropertyAddress2: '',
          PropertyCity: '',
          PropertyState: '',
          PropertyZip: '',

          Funds: '',
          Personal: '',
          IRA: '',
          Business: '',
          Available: '',
          Terms: '',
          Payments: '',
          Learn: '',
          Comments: '',
      },
      required: {
          RequestSource: '',
          FirstName: '1',
          LastName: '',
          EMail: '1',
          PhoneHome: '1',
          PhoneCell: '',
          PhoneWork: '',
          PhoneFax: '',

          MailingAddress1: '',
          MailingAddress2: '',
          MailingCity: '',
          MailingState: '',
          MailingZip: '',

          PropertyAddress1: '',
          PropertyAddress2: '',
          PropertyCity: '',
          PropertyState: '',
          PropertyZip: '',

          Funds: '',
          Personal: '',
          IRA: '',
          Business: '',
          Available: '',
          Terms: '',
          Payments: '',
          Learn: '',
          Comments: '',
      },
  };




}
