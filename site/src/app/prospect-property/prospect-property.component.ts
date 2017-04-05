import { Component, OnInit } from '@angular/core';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-prospect-property',
  templateUrl: './prospect-property.component.html',
  styleUrls: ['./prospect-property.component.css']
})
export class ProspectPropertyComponent implements OnInit {



    geolocationPosition;
    constructor() {
        
    }

    getLongitude(): void {
        if (this.geolocationPosition) return this.geolocationPosition.coords.longitude;
    }
    getLatitude(): void {
        if (this.geolocationPosition) return this.geolocationPosition.coords.latitude;
    }



    ngOnInit() {
        
        if (window.navigator && window.navigator.geolocation) {
            
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.geolocationPosition = position,
                        //console.log('Position:'),                        
                        console.log(this.geolocationPosition)
                },
                error => {
                    switch (error.code) {
                        case 1:
                            console.log('Permission Denied');
                            break;
                        case 2:
                            console.log('Position Unavailable');
                            break;
                        case 3:
                            console.log('Timeout');
                            break;
                    }
                }
              
          );
      };

      console.log(this.geolocationPosition);
  }

}
