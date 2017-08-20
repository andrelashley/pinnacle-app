import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { PinnacleService } from "./pinnacle.service";
import { IMatchup } from "./Matchup";

@Injectable()
export class MatchupsResolver implements Resolve<IMatchup[]> {

    constructor(private pinnacleService: PinnacleService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMatchup[]> {
        let leagueId = route.params['leagueId'];
        // if we have an invalid id or there are no matchups for the given league, just redirect back to the list of sports
        if (isNaN(leagueId)) {
            this.router.navigate['/sports'];
            return Observable.of(null);
        }
        return this.pinnacleService.getMatchups(leagueId)
            .map(matchups => {
                if (matchups) return matchups;
                this.router.navigate['/sports'];
                return null;
            })
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate['/sports'];
                return Observable.of(null);
            });
    }
}