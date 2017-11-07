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
        console.log('REQUESTING TEAM');
        this.teamService.getTeam()
            .subscribe(
            data => this.team = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
                console.log('Team Loaded');
            });

    }
     
    ngOnInit(): void {
        this.getTeam();
    }

}
