import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../locator-services/marker.service';

@Component({
    selector: 'app-locator',
    templateUrl: './locator.component.html',
    styleUrls: ['./locator.component.css'],
    providers: [MarkerService]
})
export class LocatorComponent implements OnInit {
    // Zoom Level //
    zoom: number = 10;
    // Start Position //
    lat: number = 27.916766641249065;
    lng: number = -82.5732421875;
    //values
    markerName: string;
    markerLat: string;
    markerLng: string;
    markerDraggable: string;
    // Markers //
    markers: marker[];


    constructor(private _markerService: MarkerService) {
        this.markers = this._markerService.getMarkers();
    }
    clickedMarker(marker: marker, index: number) {
        console.log('Clicked Marker:' + marker.name + ' at index ' + index);
    }
    mapClicked($event: any) {
        console.log('MapClicked');
        var newMarker = {
            Name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        }
        this.markers.push(newMarker);
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
        this.markers.push(newMarker);
        //this._markerService.addMarker(newMarker);

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
