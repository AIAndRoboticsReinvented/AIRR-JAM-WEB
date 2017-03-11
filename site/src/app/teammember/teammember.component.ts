import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TeamService } from '../team.service';
import { Teammember } from '../teammember';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-teammember',
  templateUrl: './teammember.component.html',
  styleUrls: ['./teammember.component.css']
})


export class TeammemberComponent implements OnInit {
    @Input() teammember: Teammember;

    ngOnInit(): void {
    }

    constructor(
        private teamService: TeamService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
}