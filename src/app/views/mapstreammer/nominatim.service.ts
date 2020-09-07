import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {map} from 'rxjs/operators';
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

  getLocation(): Observable<GeocodeResponse[]> {
    return this.http.get<GeocodeResponse[]>(`http://0.0.0.0:5000/enrichments/tempat`).catch(NominatimService._handleError);
  }

}