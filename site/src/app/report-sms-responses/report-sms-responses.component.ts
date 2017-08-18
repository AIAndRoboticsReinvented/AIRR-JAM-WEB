import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { ReportService } from '../report.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-report-sms-responses',
  templateUrl: './report-sms-responses.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './report-sms-responses.component.css'
  ]
})
export class ReportSmsResponsesComponent implements OnInit {

    report: {};

    visitorid: {};

    constructor(
        private router: Router,
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location,
        ) {}

    getSMSResponses(): void {
        this.reportService.getSMSResponses(this.visitorid)
            .subscribe(
            data => this.report = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
                //console.log('Responses Loaded');
                //console.log(this.report);
            });

    }

    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }


    ngOnInit(): void {
        this.route.parent.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });
        //console.log(this.route.firstChild.params);
        //console.log('Requesting Responses Now!!!');
        this.getSMSResponses();
    }



}
(function (document) {
    'use strict';

    var LightTableFilter = (function (Arr) {

        var _input;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function (table) {
                Arr.forEach.call(table.tBodies, function (tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _filter(row) {
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
            init: function () {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function (input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });

})(document);