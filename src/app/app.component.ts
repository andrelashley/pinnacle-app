import { Component } from '@angular/core';

@Component({
  selector: 'pa-root',
  template: `<div class="content">
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = '';
}
