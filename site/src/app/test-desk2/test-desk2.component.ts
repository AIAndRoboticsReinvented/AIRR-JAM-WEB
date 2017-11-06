import { Component, OnInit } from '@angular/core';
//import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-test-desk2',
  templateUrl: './test-desk2.component.html',
  styleUrls: ['./test-desk2.component.css']
})
export class TestDesk2Component implements OnInit {
    //File Uploader
    //public uploader: FileUploader = new FileUploader({ url: 'http://localhost:4200/test2' });
    //Long+Lat Location
    location = {};
    setPosition(position) {
        this.location = position.coords;
        console.log(position.coords);
        console.log(this.location);
    }
  constructor() { }

  ngOnInit() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              this.location = position.coords;
              console.log(position.coords);
          });
      }
  }

}
