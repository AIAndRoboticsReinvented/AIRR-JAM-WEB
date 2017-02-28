import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Teammember } from './teammember';
import { TeamService } from './team.service';



@Component({
    moduleId: module.id,
    selector: 'about',
    styleUrls: [],
    templateUrl: './about.controller.html',
    providers: [TeamService],
})

export class AboutComponent implements OnInit {

    title = "About";

    team: Teammember[];

    constructor(
        private teamService: TeamService) { }


    getTeam(): void {
        this.teamService.getTeam().then(team => this.team = team)
    }

    ngOnInit(): void {
        this.getTeam();
    }
    
}
 