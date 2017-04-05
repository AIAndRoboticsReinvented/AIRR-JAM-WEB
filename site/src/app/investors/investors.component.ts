import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { InvestorRequest } from '../investorrequest';
import { ContactRequest } from '../contact-request';
import { ContactRequestComponent } from '../contact-request/contact-request.component';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})


export class InvestorsComponent implements OnInit {
    title = "Investors";

    // Default contact request for an investor
    contactrequest: ContactRequest = {
        RequestSource: 'I Buy as Is - Investors Page',
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
            PhoneCell: '0',
            PhoneWork: '0',
            PhoneFax: '0',

            MailingAddress1: '1',
            MailingAddress2: '0',
            MailingCity: '1',
            MailingState: '1',
            MailingZip: '1',

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
            Comments: '1',
        },
        alternate: {
            RequestSource: '',
            FirstName: '',
            LastName: '',
            EMail: '',
            PhoneHome: 'Phone Number',
            PhoneCell: '',
            PhoneWork: '',
            PhoneFax: '',

            MailingAddress1: 'Address',
            MailingAddress2: '',
            MailingCity: 'City',
            MailingState: 'State',
            MailingZip: 'Zip',

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
            Comments: 'Comments',
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

    ngOnInit(): void {
    }

}





