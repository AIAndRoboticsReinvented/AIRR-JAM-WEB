import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SqueezePage } from '../squeeze-page';
import { SqueezePageService } from '../squeeze-page.service';


@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css'],
  providers: [SqueezePageService]
})
export class HtmlComponent implements OnInit {

    squeezepage: SqueezePage
     = {
        PageID: '',
        PageType: '',
        Heading1: '',
        Heading2: '',
        Heading3: '',
        Heading4: '',
        SubHeading1: '',
        SubHeading2: '',
        SubHeading3: '',
        SubHeading4: '',
        Description1: '',
        Description2: '',
        Description3: '',
        Description4: '',
        Content1: '',
        Content2: '',
        Content3: '',
        Content4: '',
        CallToAction1: '',
        CallToAction2: '',
        CallToAction3: '',
        CallToAction4: '',
        Image1: '',
        Image2: '',
        Image3: '',
        Image4: '',
        contactrequest: {
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

            //Question: '',
            //Wants: '',
            //Needs: '',
            //Region: '',


            visibility: {
                RequestSource: '0',
                FirstName: '1',
                LastName: '0',
                EMail: '1',
                PhoneHome: '0',
                PhoneCell: '0',
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

        }
      };


    constructor(
        private squeezePageService: SqueezePageService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    getSqueezePage(): void {
        console.log("Before");
        console.log(this.squeezepage);
        this.route.params.switchMap((params: Params) =>
            this.squeezePageService.getSqueezePage(+params['id']))
            .subscribe(
            data => {
                this.squeezepage = JSON.parse("[ " + data.RequestResult + "]" )[0];
                  console.log("The Data");
                  console.log(JSON.parse("[ " + data.RequestResult + "]" )[0]);
                },
            error => console.log(error),
            () => {
                console.log('Page Loaded');
            });
        console.log("After");
        console.log(this.squeezepage);

    }

    ngOnInit() {
        this.getSqueezePage();
    }


}
