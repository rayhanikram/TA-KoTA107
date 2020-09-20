import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { GeocodeConfig } from "./geocode.config";
import { GeocodeResponse } from "./geocode.response";
import { ClassificationResponse } from "./classification.response";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

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

    getClassification(): Observable<ClassificationResponse[]> {
    return this.http.get<ClassificationResponse[]>(`http://0.0.0.0:5000/classification`).catch(NominatimService._handleError);
  }

async getJsonColor() {
    var result = await this.http.get<GeocodeResponse[]>(`http://0.0.0.0:5000/enrichments/tempat`).toPromise();

    return result;
  }

}