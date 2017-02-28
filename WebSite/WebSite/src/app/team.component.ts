import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Teammember } from './teammember';
import { TeamService } from './team.service';



@Component({
    moduleId: module.id,
    selector: 'team',
    styleUrls: ['./team.component.css'],
    templateUrl: './team.component.html',
    providers: [TeamService],
})


export class TeamComponent implements OnInit {

    team: Teammember[];


    constructor(
        private router: Router,
        private teamService: TeamService) { }

    getTeam(): void {
        this.teamService.getTeam().then(team => this.team = team);
    }

    ngOnInit(): void {
        this.getTeam();
    }

}
