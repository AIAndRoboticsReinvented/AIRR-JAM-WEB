import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SqueezePage } from '../squeeze-page';
import { SqueezePageService } from '../squeeze-page.service';

@Component({
  selector: 'app-lp-ux',
  templateUrl: './lp-ux.component.html',
  styleUrls: ['./lp-ux.component.css']
})
export class LPUXComponent implements OnInit { 
    squeezepage: SqueezePage = {
        PageID: '',
        PageType: '',
        Heading1: 'Headline Goes Here',
        Heading2: 'Enter your call to action headline here',
        Heading3: 'Another Call to action Heading.',
        Heading4: '',
        SubHeading1: 'Underneath the headline you will want a smaller subheading that leads them into the bullet points or the moain body of the squeeze page.',
        SubHeading2: 'Stress the main benefit to Sign Up.',
        SubHeading3: '',
        SubHeading4: '',
        Description1: 'Bullet One Headline',
        Description2: 'Bullet Two Headline',
        Description3: 'Bullet Three Headline',
        Description4: 'Bullet Four Headline',
        Content1: 'Bullet point one text goes here.',
        Content2: 'Bullet point two text goes here.',
        Content3: 'Bullet point three text goes here.',
        Content4: 'Bullet point four text goes here.',
        CallToAction1: 'Your privacy is safe with us!',
        CallToAction2: 'We will never share your information with anyone.',
        CallToAction3: '',
        CallToAction4: '',
        Image1: 'assets/videos/IBuyAsIs3.mp4',
        Image2: 'assets/images/Charity.jpg',
        Image3: '',
        Image4: '',
        contactrequest: {
            RequestSource: 'LP-UX Squeeze Page',
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
                FirstName: 'Name',
                LastName: '',
                EMail: 'EMail Adress',
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

    constructor(private squeezePageService: SqueezePageService,
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
                this.squeezepage = JSON.parse("[ " + data.RequestResult + "]")[0];
                console.log("The Data");
                console.log(JSON.parse("[ " + data.RequestResult + "]")[0]);
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

