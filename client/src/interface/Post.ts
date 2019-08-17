import { Media } from '../../../src/enums/media.enum';
import { IUser } from './User';
export interface IPost {
  id: string;
  body: string;
  to?: string;
  from: IUser;
  createdAT: Date;
  upVotes?: IUser[];
  downVotes?: IUser[];
  totalUpVote: number;
  totalDownVote: number;
  media?: Media;
}
