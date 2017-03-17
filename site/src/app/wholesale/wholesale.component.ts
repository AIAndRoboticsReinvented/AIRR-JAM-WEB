import { Component, OnInit } from '@angular/core';
import { ContactRequest } from '../contact-request';
import { ContactRequestComponent } from '../contact-request/contact-request.component';


@Component({
  selector: 'app-wholesale',
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.css']
})
export class WholesaleComponent implements OnInit {

  title = "Wholesale";

  // Default contact request for an investor
  contactrequest: ContactRequest = {
      RequestSource: 'I Buy as Is - Wholesale Page',
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
          PhoneHome: '1',
          PhoneCell: '1',
          PhoneWork: '1',
          PhoneFax: '1',

          MailingAddress1: '1',
          MailingAddress2: '1',
          MailingCity: '1',
          MailingState: '1',
          MailingZip: '1',

          PropertyAddress1: '1',
          PropertyAddress2: '1',
          PropertyCity: '1',
          PropertyState: '1',
          PropertyZip: '1',

          Funds: '0',
          Personal: '0',
          IRA: '0',
          Business: '0',
          Available: '0',
          Terms: '0',
          Payments: '0',
          Learn: '0',
          Comments: '1',
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

  };


  constructor() { }

  ngOnInit() {
  }

}
