import { MatchupsListComponent } from './matchups-list.component';
import { LeaguesListComponent } from './leagues-list.component';
import { SportsListComponent } from './sports-list.component';
import { PinnacleService } from './pinnacle.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'sports', component: SportsListComponent },
      { path: 'leagues/:sportsId', component: LeaguesListComponent },
      { path: 'matchups/:leagueId', component: MatchupsListComponent }
    ]),
    CommonModule
  ],
  declarations: [
    SportsListComponent,
    LeaguesListComponent,
    MatchupsListComponent
  ],
  providers: [
    PinnacleService
  ]
})
export class SportModule { }
