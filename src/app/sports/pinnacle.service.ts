import { IMatchup } from './Matchup';
import { ILeague } from './League';
import { ISport } from './Sport';
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class PinnacleService {
  private _sportUrl = 'https://api.staging.lite.labs.pinnaclesports.com/0.7/sports';

  constructor(private _http: Http) { }

  getSports(): Observable<ISport[]> {
    return this._http.get(this._sportUrl, this.buildHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLeagues(sportsId: number): Observable<ILeague[]> {
    let leagueUrl = `https://api.staging.lite.labs.pinnaclesports.com/0.7/sports/${sportsId}/leagues`;
    return this._http.get(leagueUrl, this.buildHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMatchups(leagueId: number): Observable<IMatchup[]> {
    let matchupUrl = `https://api.staging.lite.labs.pinnaclesports.com/0.7/leagues/${leagueId}/matchups`;
    return this._http.get(matchupUrl, this.buildHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }

  /* helpers */
  private buildHeaders(): RequestOptions {
    // Writing a custom HTTP interceptor for a project of this size would be overkill, so a method will do here
    let headers = new Headers({ 'X-API-Key': 'EeycUJkxAvFrXVFjxUfRRvMHnXPniq8f' });
    return new RequestOptions({ headers: headers });
  }

  private handleError(error: Response): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }
}
