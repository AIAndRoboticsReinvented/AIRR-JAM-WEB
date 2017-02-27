import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  styleUrls: [ './app.component.css' ],
  selector: 'my-app',
  template: `
    <header></header>
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heros"  routerLinkActive="active">Heros</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
