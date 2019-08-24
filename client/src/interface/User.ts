import { Gender } from '../../../src/enums/genders.enum';
import { IPost } from './Post';

export interface IUser {
  id: string;
  displayName: string;
  displayImage: string;
  coverImage: string;
  bio: string;
  gender: Gender;
  name: string;
  firstName: string;
  lastName: string;
  followers: IUser[];
  following: IUser[];
  numOfFollowers: number;
  numOfFollowing: number;
  DOB?: Date;
  createdAt: Date;
  posts: IPost[];
  favPost: IPost[];
  likedPost: IPost[];
}
