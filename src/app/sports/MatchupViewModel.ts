import { IMatchup } from './Matchup';
import { IMoneyLine } from './MoneyLine';
import { IParticipant } from './Participant';
export class MatchupViewModel {
  id: number;
  name: string;
  homeParticipant: IParticipant;
  //homeMoneyLine: IMoneyLine;
  awayParticipant: IParticipant;
  //awayMoneyLine: IMoneyLine;

  constructor(matchup: IMatchup) {

    //console.log(matchup.moneyline);

    this.name = matchup.name;
    this.homeParticipant = matchup.participants[0];
    this.awayParticipant = matchup.participants[1];
    //this.homeMoneyLine = matchup.moneyline[0];
    //this.awayMoneyLine = matchup.moneyline[1];
  }
}
