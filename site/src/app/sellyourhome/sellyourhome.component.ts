import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContactRequest } from '../contact-request';
import { ContactRequestComponent } from '../contact-request/contact-request.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sellyourhome',
  templateUrl: './sellyourhome.component.html',
  styleUrls: ['./sellyourhome.component.css']
})
export class SellyourhomeComponent implements OnInit {
    tiles: {};
    title = "Sell Your Home";

    // Default contact request for an investor
  contactrequest: ContactRequest = {
      RequestSource: 'I Buy as Is - Sell Your Home Page',
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


  constructor(meta: Meta, title: Title) {
      meta.addTags([

          {
              name: 'author', content: 'ibuyasis.com'
          },
          {
              name: 'keywords', content: 'i buy as is, i buy as is sell homes, i buy as is sell my house, i buy as is sell, ibai sell, sell my house, sell house now, house for cash, quick cash, cash now, sell my home, sell home, sell homes i have'
          },
          {
              name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
          },
      ])

  }

  ngOnInit() {
      this.tiles = [
          {
              img: 'assets/images/slideshow/sellhome.jpg', title: 'Selling Your Home?',
              caption: 'Do you need to sell your home in the next 60 days? We can make this possible! No matter the situation we are here to help. After receiving your information, we can make you a cash offer within 48 hours. If the offer is agreed upon we can close quickly with no commission or closing costs to you. By speaking with our local real estate professionals, you are granted the opportunity to sell your home with no additional costs. We have over 45 combined years of experience in real estate. By submitting your information we are able to more accurately calculate a cash offer for you by compiling the proper research on your property. ', slide: 0, bottom: 1
          },
          {
              img: 'assets/images/slideshow/sellhome2.jpg', title: 'Sell Your Home AS IS!',
              caption: 'We will buy your house for cash offer now! Your home gets our immediate attention. We work diligently to buy your house and insure that you sell your home as is, so that every cash offer transaction goes smoothly and that you are kept informed throughout the numerous steps involved in selling your house. Since we are private investors and not realtors we buy houses for cash, you pay no fees or commissions and you sell your home as is. When you do business with I Buy As Is, you will find us knowledgeable and helpful, and we will answer all your questions honestly and truthfully about selling your home fast. We have several different options to help relieve you of selling your house that has become a financial burden so we may put you and your family on the road to relief. ', slide: 0, bottom: 1
          },
      ];
  }

}
