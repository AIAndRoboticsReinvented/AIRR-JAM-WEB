import { Component, OnInit } from '@angular/core';
import { ContactRequest } from '../contact-request'
import { ContactRequestComponent } from '../contact-request/contact-request.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
    title = "Contact Us";
    // Default contact request for an investor
    contactrequest: ContactRequest = {
        RequestSource: 'I Buy as Is - Contact Us Page',
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
            Comments: 'Purchasing Criteria',
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

    constructor(meta: Meta, title: Title) {
        meta.addTags([

        {
            name: 'author', content: 'ibuyasis.com'
        },
        {
            name: 'keywords', content: 'i buy as is, contact i buy as is, contact sellers, contact us, homes faqs, ugly houses, homes for sale, cash now, quick cash, house investment,sell houses online'
        },
        {
            name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
        },
        ])
    }

  ngOnInit() {
  }

}
