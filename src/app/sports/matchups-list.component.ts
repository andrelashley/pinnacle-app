import { element } from 'protractor';
import { MatchupViewModel } from './MatchupViewModel';
import { ActivatedRoute } from '@angular/router';
import { IMatchup } from './Matchup';
import { PinnacleService } from './pinnacle.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from 'underscore';
import * as moment from 'moment/moment';
import { BreadcrumbService } from "ng2-breadcrumb/ng2-breadcrumb";

@Component({
  templateUrl: './matchups-list.component.html',
  styleUrls: ['./matchups-list.component.css']
})
export class MatchupsListComponent implements OnInit {

  matchups: IMatchup[] = [];
  groups: MatchupViewModel[] = [];
  errorMessage: string;

  constructor(private _pinnacleService: PinnacleService, private _route: ActivatedRoute, private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.matchups = this._route.snapshot.data['matchups'];
    let matchupsByDate = _(this.matchups).groupBy(item => moment(item.startTime).format('MMM, D, Y'));
    for (var key in matchupsByDate) {
      if (matchupsByDate.hasOwnProperty(key)) {
        this.groups.push(new MatchupViewModel(key, matchupsByDate[key]));
      }
    }
    if (this.matchups.length > 0) {
      this.breadcrumbService.addCallbackForRouteRegex('^/sports/leagues/matchups/[0-9]+',
       (id: string) => { return this.matchups[0].league.name });
    }
  }


}
