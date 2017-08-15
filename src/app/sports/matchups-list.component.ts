import { MatchupViewModel } from './MatchupViewModel';
import { ActivatedRoute } from '@angular/router';
import { IMatchup } from './Matchup';
import { PinnacleService } from './pinnacle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './matchups-list.component.html',
  styleUrls: ['./matchups-list.component.css']
})
export class MatchupsListComponent implements OnInit {

  matchups: IMatchup[] = [];
  matchupDisplay: MatchupViewModel[];
  errorMessage: string;

  constructor(private _pinnacleService: PinnacleService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let leagueId = +this._route.snapshot.paramMap.get('leagueId');
    this._pinnacleService.getMatchups(leagueId)
      .subscribe(matchups => {
        this.matchups = matchups;

        console.log(this.matchups);

        //console.log(this.matchups[0].moneyline[0]);

        //this.matchupDisplay = this.matchups.map(matchup => new MatchupViewModel(matchup));
      },
      error => this.errorMessage = <any>error)
  }
}
