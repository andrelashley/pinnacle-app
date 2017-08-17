import { SportsListComponent } from './sports/sports-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { SportModule } from './sports/sport.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeaguesListComponent } from './sports/leagues-list.component';
import { MatchupsListComponent } from './sports/matchups-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'sports', pathMatch: 'full' },
      { path: '**', redirectTo: 'sports', pathMatch: 'full' }
    ]),
    SportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
