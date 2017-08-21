import { ConvertToAbsoluteValuePipe } from './convert-to-absolute-value.pipe';
import { MatchupsListComponent } from './matchups-list.component';
import { LeaguesListComponent } from './leagues-list.component';
import { SportsListComponent } from './sports-list.component';
import { PinnacleService } from './pinnacle.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SportsResolver } from "./sports-resolver.service";
import { LeaguesResolver } from "./leagues-resolver.service";
import { MatchupsResolver } from "./matchups-resolver.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'sports', component: SportsListComponent, resolve: { sports: SportsResolver }, data: { breadcrumb: 'Sports' } },
      { path: 'sports/leagues/:sportsId', component: LeaguesListComponent, resolve: { leagues: LeaguesResolver }, data: { breadcrumb: 'Leagues' } },
      { path: 'sports/leagues/matchups/:leagueId', component: MatchupsListComponent, resolve: { matchups: MatchupsResolver }, data: { breadcrumb: 'Matchups' } }
    ]),
    CommonModule
  ],
  declarations: [
    SportsListComponent,
    LeaguesListComponent,
    MatchupsListComponent,
    ConvertToAbsoluteValuePipe
  ],
  providers: [
    PinnacleService,
    SportsResolver,
    LeaguesResolver,
    MatchupsResolver
  ]
})
export class SportModule { }
