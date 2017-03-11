import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { InvestorRequest } from '../investorrequest';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})


export class InvestorsComponent implements OnInit {
    title = "Investors";

    investorrequest: InvestorRequest = {
        FirstName: '',
        LastName: '',
        EMail: '',
        Phone: '',
        Address1: '',
        Address2: '',
        City: '',
        State: '',
        Zip: '',
        funds: '',
        personal: '',
        ira: '',
        business: '',
        available: '',
        terms: '',
        payments: '',
        learn: '',
        comments: ''
    };
    ngOnInit(): void {
    }

}





