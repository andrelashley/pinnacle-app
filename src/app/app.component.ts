import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { BreadcrumbService } from "ng2-breadcrumb/ng2-breadcrumb";

@Component({
  selector: 'pa-root',
  template: `
  <div class="content">
    <breadcrumb [useBootstrap]="true"></breadcrumb>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private breadcrumbService: BreadcrumbService) {
    breadcrumbService.addFriendlyNameForRoute('/sports', 'Sports');
    breadcrumbService.addFriendlyNameForRoute('/sports/leagues/[0-9]+', 'Leagues');
    breadcrumbService.addFriendlyNameForRoute('/sports/leagues/matchups/[0-9]+', 'Matchups');
  }
}
