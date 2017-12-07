import { Component, OnInit } from '@angular/core';
import { ContactRequest } from '../contact-request';
import { ContactRequestComponent } from '../contact-request/contact-request.component';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-wholesale',
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.css']
})
export class WholesaleComponent implements OnInit {

    title = "Wholesale";
    tiles: {};

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
              name: 'keywords', content: 'real estate investment, real estate investing, SFR, HUD, hud properties, Tampa, Saint Petersburg, Sarasota investment real estate, property management, hard money, hard money lending, investment financing, investor loans, owner finance, real estate, realtor, broker, investment specialist, Florida investment real estate, foreclosure, foreclosures, foreclose, investment foreclosure, rental property, rental, income property, income properties, flipping homes, house flipping, rehabbing, rehab properties, Tampa Investment Real Estate, Wholesaler, Wholesale, Wholesale Properties, Wholesale single family homes, Investing in real estate, Real Estate Investing, Creative Funding for Real Estate, REIT Business Planning, Cash Flow Analysis for Real Estate, Real Estate Market Trends, Real Estate Business Development and Real Estate Strategy, Real Estate Structuring, Marketing & Sales of Real Estate property, Bank Owned Real Estate, REO Properties, Distressed Real Estate, Acquisition of Real Estate at below Market Value, Wholesale Real Estate, Probate Real Estate, Rehabbing Real Estate, Flipping Real Estate, i buy as is, wholesale tampa, wholesale floria ,wholesale, i buy as is wholesale, home stress, rehab properties, rehab retail properties, property listings'
          },
          {
              name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
          },
      ])

  }

  ngOnInit() {
      this.tiles = [
          {
              img: 'assets/images/slideshow/stress1.jpg', title: 'Take ALL Of The Stress Out Of Your Next Investment Property.',
              caption: '', slide: 0, bottom: 1,
          },
      ];
  }

}
