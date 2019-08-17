import { Media } from '../../../src/enums/media.enum';
import { IUser } from './User';
export interface IPost {
  id: string;
  body: string;
  to: string;
  from: string;
  createdAT: Date;
  upVote: IUser;
  downVote: IUser;
  totalUpVote: number;
  totalDownVote: number;
  media: Media;
}
