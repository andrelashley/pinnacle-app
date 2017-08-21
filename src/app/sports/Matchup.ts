import { IMoneyLine } from './MoneyLine';
import { IParticipant } from './Participant';
import { ILeague } from "./League";
export interface IMatchup {
  id: number;
  name: string;
  participants: IParticipant[];
  startTime: Date;
  moneyline: any;
  league: ILeague;
}
