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


  constructor(private _pinnacleService: PinnacleService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let sportsId = +this._route.snapshot.paramMap.get('sportsId');
    this._pinnacleService.getLeagues(sportsId)
      .subscribe(leagues => {
        this.leagues = leagues
      },
      error => this.errorMessage = <any>error);
  }
}
