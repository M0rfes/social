import { IPost } from '../../interface/Post';
import { IUser } from '../../interface/User';
import { Media } from '../../../../src/enums/media.enum';

export class PostData implements IPost {
  constructor(public id: string, public from: IUser) {}

  body: string = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iusto accusamus suscipit facilis deleniti, cumque quidem eum sed corporis! Ducimus?
          `;
  to?: string | undefined;

  createdAT: Date = new Date();
  upVotes?: IUser[] | undefined;
  downVotes?: IUser[] | undefined;
  totalUpVote: number = 0;
  totalDownVote: number = 0;
  media?: { type: Media; URL: string } = {
    type: Media.Image,
    URL: 'https://source.unsplash.com/user/erondu',
  };
}
