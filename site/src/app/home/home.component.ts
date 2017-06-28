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
          { img: 'assets/images/slideshow/Charity-2.jpg', caption: '', slide: 0 },
          { img: 'assets/images/slideshow/Family-2.jpg', caption: '', slide: 1 },
          { img: 'assets/images/slideshow/sale-2.jpg', caption: '', slide: 2 },
          { img: 'assets/images/slideshow/Team-2.jpg', caption: '', slide: 3 }
      ];
 
  }
}
