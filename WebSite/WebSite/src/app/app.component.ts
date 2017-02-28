import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  styleUrls: [ './app.component.css' ],
  selector: 'my-app',
  template: `
    <header></header>
    <router-outlet></router-outlet>
    <div class="clearfix"></div>
    <footer></footer>
  `
})
export class AppComponent {
  title = '';
}
