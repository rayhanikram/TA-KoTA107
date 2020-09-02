import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {API_URL} from '../../env';
import {DataTweets} from './datatweets.model';


@Injectable()
export class DataTweetsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
getTweets(): Observable<DataTweets[]> {
    return this.http.get<DataTweets[]>(`${API_URL}/data_tweets`).catch(DataTweetsApiService._handleError);
 }
}