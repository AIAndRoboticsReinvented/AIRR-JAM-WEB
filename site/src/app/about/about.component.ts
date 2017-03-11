import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Teammember } from '../teammember';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [TeamService]
})

export class AboutComponent implements OnInit {

    title = "About";
    team: Teammember[];
    constructor(private teamService: TeamService) { }

    getTeam(): void {
        this.teamService.getTeam().then(team => this.team = team)
    }


    ngOnInit() {
        this.getTeam();
  }

}

