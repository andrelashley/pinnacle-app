import { IMatchup } from './Matchup';
import { List } from "underscore";
import * as _ from "underscore";

export class MatchupViewModel {
  startTime: Date;
  matchups: IMatchup[] = [];

  constructor(time: string, matches: List<IMatchup>) {
    this.startTime = new Date(time);
    _.forEach(matches, item => this.matchups.push(item));
  }
}
