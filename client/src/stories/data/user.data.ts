import { IUser } from '../../interface/User';
import { IPost } from '../../interface/Post';

export class UserData implements IUser {
  constructor(public id: string, public likedPost: IPost[]) {}
  followers: IUser[] = [];
  following: IUser[] = [];
  createdAt: Date = new Date('1997-08-01');
  Posts: import('../../interface/Post').IPost[] = [];
  favPost: import('../../interface/Post').IPost[] = [];

  displayName: string = 'morfes';
  displayImage: string = 'https://source.unsplash.com/user/erondu';
  coverImage: string = '';
  bio: string = '';
  gender?: import('../../../../src/enums/genders.enum').Gender | undefined;
  firstName: string = 'Faheem';
  lastName: string = 'khan';
  name: string = `${this.firstName} ${this.lastName}`;

  numberOfFollowers: number = 0;
  numberOfFollowing: number = 0;
  DOB?: Date | undefined;
}
