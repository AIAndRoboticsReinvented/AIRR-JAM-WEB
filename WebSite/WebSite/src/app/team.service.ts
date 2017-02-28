import { Injectable } from '@angular/core';

import { Teammember } from './teammember';
import { TEAM } from './mock-team'

@Injectable()
export class TeamService {
    getTeam(): Promise<Teammember[]> {
        return Promise.resolve(TEAM);
    }

}
