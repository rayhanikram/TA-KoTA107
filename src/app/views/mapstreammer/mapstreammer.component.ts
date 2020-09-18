import { Component, OnInit, ElementRef, ViewChild, NgZone, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
//import { BandungDataService } from "./bandungdata.service";
//import { point, polygon } from '@turf/helpers';
import { NominatimService } from './nominatim.service';
import { GeocodeResponse } from "./geocode.response";
import {Subscription} from 'rxjs/Subscription';
//import  booleanPointInPolygon  from '@turf/boolean-point-in-polygon';
declare let L;
import 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './mapstreammer.component.html',
   styleUrls: ['./mapstreammer.component.css'],
    providers: [ GoogleMapsAPIWrapper]
})


export class MapstreammerComponent {

 @ViewChild('mapControl') mapControl: Component;
  title: string = 'Peta Mapstreammer';
  lat: number = -6.914744;
  lng: number = 107.609810;
  zoom: number = 13;
  iterasi: number;
  geocodeSubs: Subscription;
  geocode: any;
  map: any;
  //private map;
  //geoJson = JSON.parse('assets/kota-bandung.json');


  constructor(private nominatim: NominatimService, private _wrapper:GoogleMapsAPIWrapper) {}

clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

   buildMap() {
    this._wrapper.getNativeMap().then((theMap)=>{
      this.map = theMap;
      console.log(theMap);
    }).catch((e)=>console.log(e));
  }


  ngOnInit() : void {

 this.geocodeSubs = 
  this.nominatim
      .getLocation()
      .subscribe(res => {
          this.geocode = res;
        },
        console.error
      );
     this.buildMap();
     


  }

  clicked(clickEvent) {
    //console.log(clickEvent);
    console.log(this.map);
  }
 


}