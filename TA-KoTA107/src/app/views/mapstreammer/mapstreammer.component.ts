import { Component, OnInit, ElementRef, ViewChild, NgZone, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { BandungDataService } from "./bandungdata.service";
import { point, polygon } from '@turf/helpers';
import { NominatimService } from './nominatim.service';
import { GeocodeResponse } from "./geocode.response";
import {Subscription} from 'rxjs/Subscription';
import  booleanPointInPolygon  from '@turf/boolean-point-in-polygon';
declare let L;
import 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './mapstreammer.component.html',
   styleUrls: ['./mapstreammer.component.css'],
    providers: [BandungDataService, GoogleMapsAPIWrapper]
})


export class MapstreammerComponent {

 @ViewChild('mapControl') mapControl: Component;
  title: string = 'Peta Mapstreammer';
  lat: number = -6.914744;
  lng: number = 107.609810;
  zoom: number = 13;
  iterasi: number;
  geoJsonObject: any;
  geocodeSubs: Subscription[];
  geocode: GeocodeResponse[];
  map: any;
  //private map;
  //geoJson = JSON.parse('assets/kota-bandung.json');
  alamat: string[] = ["Jalan Aceh", "BIP", "Cipaganti", "Kiaracondong", "Baleendah", "Pasteur"];

  constructor(private _bandungDataService: BandungDataService,private nominatim: NominatimService, private _wrapper:GoogleMapsAPIWrapper, private _zone: NgZone) {}

clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

   buildMap() {
    this._wrapper.getNativeMap().then((theMap)=>{
      this.map = theMap;
      console.log(theMap);
    }).catch((e)=>console.log(e));
  }
 
   getGeoJSON(): void {
    this._bandungDataService.getBandungGeoJson()
      .subscribe(resGeoJsonData => this.geoJsonObject = resGeoJsonData);
  }

  markerlocation() {
     this.nominatim
      .getLocation(this.alamat[1])
      .subscribe(res => {
          this.geocode = res;
        },
        console.error
      );
  }


  ngOnInit() : void {

 // this.geocodeSubs[0] = 


  this.nominatim
      .getLocation(this.alamat[3])
      .subscribe(res => {
          this.geocode = res;
        },
        console.error
      );
    this.getGeoJSON();
     this.buildMap();
     


  }

  clicked(clickEvent) {
    //console.log(clickEvent);
    console.log(this.map);
  }
 
  styleFunc(feature: any): any {

    var nama_kecamatan = feature.getProperty('nama_kecamatan');
    var color = 'green';
 if (nama_kecamatan == "Sukasari" || nama_kecamatan == "Babakan Ciparay" || nama_kecamatan == "Antapani" || nama_kecamatan =="Sukajadi" || nama_kecamatan == "Lengkong" || nama_kecamatan =="Buahbatu" || nama_kecamatan == "Arcamanik") {
       color = 'yellow';
    }else if (nama_kecamatan == "Kiaracondong" || nama_kecamatan == "Cidadap" || nama_kecamatan == "Batununggal" || nama_kecamatan == "Sumur Bandung" || nama_kecamatan == "Ujungberung") {
       color = 'red';
    }else color = 'green';
    return {
      fillColor: color,
      strokeColor: color,
      strokeWeight: 1
    };
  }


}