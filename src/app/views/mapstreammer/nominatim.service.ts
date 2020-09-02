import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { GEOCODING_ENDPOINT } from "./nominatim.constant";
import { GeocodeConfig } from "./geocode.config";
import { GeocodeResponse } from "./geocode.response";
import { Observable } from "rxjs/Observable";

@Injectable({
    providedIn: 'root'
})
export class NominatimService {

  constructor(private http: HttpClient) {

  }

    private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getLocation(query: string): Observable<GeocodeResponse[]> {
    return this.http.get<GeocodeResponse[]>(`${GEOCODING_ENDPOINT} ${query}`).catch(NominatimService._handleError);
  }

}