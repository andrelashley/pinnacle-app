import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { ILeague } from './League';
import { PinnacleService } from './pinnacle.service';
import { IMatchup } from './Matchup';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './leagues-list.component.html',
  styleUrls: ['./leagues-list.component.css']
})
export class LeaguesListComponent implements OnInit {
  errorMessage: string;
  leagues: ILeague[] = [];
  sportName: string;

  constructor(private _route: ActivatedRoute, private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.leagues = this._route.snapshot.data['leagues'];
    this.breadcrumbService.addCallbackForRouteRegex('^/sports/leagues/[0-9]+',
      (id) => { return this.leagues[0].sport.name });
  }

}
