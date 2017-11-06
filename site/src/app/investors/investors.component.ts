import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


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
    tiles: {};

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
    constructor(meta: Meta, title: Title) {
        meta.addTags([

            {
                name: 'author', content: 'ibuyasis.com'
            },
            {
                name: 'keywords', content: 'Craigslist real estate, Make money with real estate, Tampa Heights, Bank Owned Real Estate, wholesale, wholesaler, fixer upper, cash buyer, cash buyer only, reo, hud homes, auction, foreclosure homes, auction homes, investor special, investment opportunity, real estate investing, real estate investment, Probate, turn - key homes, Wholesale single family, homes, Cash Flow Analysis for Real Estate, Marketing & Sales of Real Estate, property, Bulk REOs, Creative Funding for Real Estate, Town & Country, St. Petersburg, Real Estate Market Trends, Tampa Investment Real Estate, Real Estate Business Development, Acquisition of Real Estate at below Market Value, Rehabbing Real Estate, Flipping Real Estate, SFR, discounted homes, Hard Money Loans, Temple Terrance, East Tampa, HUD, hud properties, real estate investment, real estate investing, Tampa, Saint Petersburg, Distressed Real Estate, Sarasota investment real estate, Investing in real estate property management, hard money, hard money lending, investment financing, investor loans, REIT Business Planning, Turn - key Real Estate, owner finance, real estate, realtor, broker, investment specialist, Florida investment real estate, financing available, foreclosure, Clearwater, foreclosures, foreclose, investment foreclosure, rental property, rental, income property, income properties, flipping home, house flipping, flipping houses for profit, rehabbing, rehab properties, Tampa Investment Real Estate, Wholesale single family homes, Investing in real estate, Real Estate Investing, Creative Funding for Real Estate, REITs, Cash Flow Analysis for Real Estate, Real Estate Business Development and Real Estate Strategy, Real Estate Structuring, R.E Marketing & Sales of Real Estate property, Bank Owned Real Estate, Homes, Distressed Real Estate Properties, Acquisition of Real Estate at below Market Value, cheap homes, bargain homes, profit, vacant land, commercial flip, Florida fix & flip, West Tampa, Hard Money, Luxury homes, Quick Cash Profit, Seminole Heights, Carrollwood, distressed assets, i buy as is, home investment, investment properties, ugly houses, homes for sale, cash now, quick cash, house investment,sell houses online'
            },
            {
                name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
            },
        ])
    }

    ngOnInit() {
        this.tiles = [
            {
                img: 'assets/images/slideshow/investorhand.jpg', title: 'Are You a Real Estate Investor Looking to Lend?',
                caption: '', slide: 0
            },
        ];
    }

}







