import { IUser } from '../../interface/User';

export class UserData implements IUser {
  followers: IUser[] = [];
  following: IUser[] = [];
  createdAt: Date = new Date('1997-08-01');
  Posts: import('../../interface/Post').IPost[] = [];
  favPost: import('../../interface/Post').IPost[] = [];
  likedPost: import('../../interface/Post').IPost[] = [];
  id: string = '1';
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
