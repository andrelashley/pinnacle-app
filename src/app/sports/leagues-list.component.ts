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

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.leagues = this._route.snapshot.data['leagues'];
  }

}
