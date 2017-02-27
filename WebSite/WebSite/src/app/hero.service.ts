import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROS } from './mock-heros'

@Injectable()
export class HeroService {
  getHeros(): Promise<Hero[]> {
    return Promise.resolve(HEROS);
  } 

  getHero(id: number): Promise<Hero> {
    return this.getHeros()
      .then(heros => heros.find(hero => hero.id === id));
  }
}
