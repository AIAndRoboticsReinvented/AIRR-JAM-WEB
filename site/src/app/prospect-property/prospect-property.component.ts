import { Component, OnInit } from '@angular/core';

import { GoogleMapComponent } from '../google-map/google-map.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-prospect-property',
  templateUrl: './prospect-property.component.html',
  styleUrls: ['./prospect-property.component.css']
})
export class ProspectPropertyComponent implements OnInit {

      getAddress(data)  {
            console.log(data);
      }

    geolocationPosition;
    lat;
    long;
    err;

    constructor() {
        
    }

    getLongitude(): void {
        if (this.long) return this.long;
    }
    getLatitude(): void {
        if (this.lat) return this.lat;
    }


    getLocation(opts): Observable<any> {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.watchPosition((position) => {
                    observer.next(position);
                }, (error) => {
                    switch (error.code) {
                        case 1:
                            observer.error('errors.location.permissionDenied');
                            break;
                        case 2:
                            observer.error('errors.location.positionUnavailable');
                            break;
                        case 3:
                            observer.error('errors.location.timeout');
                            break;
                    }
                }, opts);
            } else {
                observer.error('errors.location.unsupportedBrowser');
            }
        });
    }


    ngOnInit() {
        var source = this.getLocation({ enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });
        source.subscribe(pos => {
            this.lat = pos.coords.latitude;
            this.long = pos.coords.longitude;
        }, err => {
            this.err = err;
            console.log(err);
        });
    }


  //  ngOnInit() {
        
  //      if (window.navigator && window.navigator.geolocation) {
            
  //          window.navigator.geolocation.getCurrentPosition(
  //              position => {
  //                  this.geolocationPosition = position,
  //                      //console.log('Position:'),                        
  //                      console.log(this.geolocationPosition)
  //              },
  //              error => {
  //                  switch (error.code) {
  //                      case 1:
  //                          console.log('Permission Denied');
  //                          break;
  //                      case 2:
  //                          console.log('Position Unavailable');
  //                          break;
  //                      case 3:
  //                          console.log('Timeout');
  //                          break;
  //                  }
  //              }
              
  //        );
  //    };

  //    console.log(this.geolocationPosition);
  //}

}
