import { IMoneyLine } from './MoneyLine';
import { IParticipant } from './Participant';
export interface IMatchup {
  id: number;
  name: string;
  participants: IParticipant[];
  startTime: Date;
  moneyline: any;
}
