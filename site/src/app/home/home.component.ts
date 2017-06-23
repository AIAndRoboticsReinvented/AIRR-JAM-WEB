import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = "Home";
    tiles: {};

  constructor() { }

  ngOnInit() {
      this.tiles = [
          { img: 'assets/images/slideshow/CharitySlide.jpg', caption: 'Test1', slide: 0 },
          { img: 'assets/images/slideshow/familyslide.jpg', caption: 'Test2', slide: 1 },
          { img: 'assets/images/slideshow/MoreSlide.jpg', caption: '4th5', slide: 2 },
          { img: 'assets/images/slideshow/TeamSlide.jpg', caption: '4therh', slide: 3 }
      ];
 
  }
}
