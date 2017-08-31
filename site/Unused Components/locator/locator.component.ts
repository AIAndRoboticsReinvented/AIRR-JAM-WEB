import { Component, OnInit } from '@angular/core';
//import { MarkerService } from '../locator-services/marker.service';

@Component({
    selector: 'app-locator',
    templateUrl: './locator.component.html',
    styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {
    // Zoom Level //
    zoom: number = 10;
    // Start Position //
    lat: number = 27.843250;
    lng: number = -82.472992;
    //values
    markerName: string;
    markerLat: string;
    markerLng: string;
    markerDraggable: string;
    // Markers //
    markers: marker[] = [
        {
            name: 'Riverwood and Hillsborough River',
            lat: 27.976575,
            lng: -82.481322,
            draggable: false
        },
        {
            name: 'Brandon',
            lat: 27.921247,
            lng: -82.295354,
            draggable: false
        },
        {
            name: 'Tampa',
            lat: 28.015452,
            lng: -82.590888,
            draggable: false
        },
        {
            name: 'Northwest Tampa',
            lat: 27.971302,
            lng: -82.489595,
            draggable: false
        },
        {
            name: 'Beach Park',
            lat: 27.943802,
            lng: -82.518902,
            draggable: false
        },
        {
            name: 'Madeira Beach',
            lat: 27.795803,
            lng: -82.792770,
            draggable: false
        },
        {
            name: 'Crisp Park',
            lat: 27.804666,
            lng: -82.630867,
            draggable: false
        },
        {
            name: 'River Oaks',
            lat: 28.027684,
            lng: -82.572422,
            draggable: false
        },
        {
            name: 'Clearwater',
            lat: 27.954939,
            lng: -82.762241,
            draggable: false
        }


    ];


    constructor() {}
    clickedMarker(marker: marker, index: number) {
        console.log('Clicked Marker:' + marker.name + ' at index ' + index);
    }

    mapClicked($event: any) {
        var newMarker = {
            name: ' Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        }
    }
   
    markerDragEnd(marker: any, $event: any) {
        console.log('dragEnd', marker, $event);
        var updMarker = {
            name: marker.name,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            draggable: false
        }

        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
    }
    addMarker() {
        console.log('adding location');
        if (this.markerDraggable == 'yes') {
            var isDraggable = true;

        } else {
            var isDraggable = false;
        }
        var newMarker = {
            name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            draggable: isDraggable
        }

    }

  ngOnInit() {
  }

}
//Marker Type//
interface marker {
    name?: string;
    lat: number;
    lng: number;
    draggable: boolean;
}
