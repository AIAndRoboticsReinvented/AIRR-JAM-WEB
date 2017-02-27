import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  moduleId: module.id,
  selector: 'my-heros',
  styleUrls: ['./heros.component.css'],
  templateUrl: './heros.component.html',
  providers: [HeroService]
})


export class HerosComponent implements OnInit { 

  heros: Hero[];
  selectedHero:Hero;

  
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroService.getHeros().then(heros => this.heros = heros);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeros();
  }



  hero: Hero = {
    id:1,
    name: 'windstorm'
  };
}
