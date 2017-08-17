import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { BreadcrumbService } from "ng2-breadcrumb/ng2-breadcrumb";

@Component({
  selector: 'pa-root',
  template: `
  <div class="content">
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }


}
