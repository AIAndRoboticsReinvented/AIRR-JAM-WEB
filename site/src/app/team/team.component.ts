import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Teammember } from '../teammember';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
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
