import { ISport } from './Sport';
import { PinnacleService } from './pinnacle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {

  sports: ISport[] = [];
  errorMessage: string;

  constructor(private _pinnacleService: PinnacleService) { }

  ngOnInit(): void {
    this._pinnacleService.getSports()
      .subscribe(sports => {
        this.sports = sports;
      },
      error => this.errorMessage = <any>error);
  }
}
