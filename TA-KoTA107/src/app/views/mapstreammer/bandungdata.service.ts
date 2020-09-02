import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http,Response } from '@angular/http';
 
@Injectable()
export class BandungDataService {
 
  // location of GeoJSON file in server
  private _url: string = 'assets/kota-bandung-kecamatan.json';
 
  constructor(private _http: HttpClient ) {}
 

  getBandungGeoJson() {
     return this._http.get(this._url);
  }
}