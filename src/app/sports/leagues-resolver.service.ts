import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { PinnacleService } from "./pinnacle.service";
import { ILeague } from "./League";

@Injectable()
export class LeaguesResolver implements Resolve<ILeague[]> {

    constructor(private pinnacleService: PinnacleService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILeague[]> {
        let sportsId = route.params['sportsId'];
        if(isNaN(sportsId)){
            this.router.navigate['/sports'];
            return Observable.of(null);
        }
        return this.pinnacleService.getLeagues(sportsId)
            .map(leagues => {
                if(leagues) return leagues;
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