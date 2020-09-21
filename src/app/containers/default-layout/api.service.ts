import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {API_URL} from '../../env';
import {DataTweets} from './datatweets.model';
import {Enrichments} from './enrichments.model';
import {Rekapitulasi} from './rekapitulasi.model';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

 
getTweets(): Observable<DataTweets[]> {
    return this.http.get<DataTweets[]>(`${API_URL}/data_tweets`);
 }

getEnrichments(): Observable<Enrichments[]>{
    return this.http.get<Enrichments[]>(`${API_URL}/enrichments`);
 }

 getStream(): Observable<string>{
    return this.http.get<string>(`${API_URL}/enrichments`);
 }

  getRekap(): Observable<Rekapitulasi[]>{
    return this.http.get<Rekapitulasi[]>(`${API_URL}/rekapitulasi`);
 }

}