import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ISport } from './Sport';
import { PinnacleService } from "./pinnacle.service";

@Injectable()
export class SportsResolver implements Resolve<ISport[]> {

    constructor(private pinnacleService: PinnacleService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISport[]> {
        return this.pinnacleService.getSports()
            .map(sports => {
                if(sports) return sports;
                return null;
            })
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                return Observable.of(null);
            });
    }
}