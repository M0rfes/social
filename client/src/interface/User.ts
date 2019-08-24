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
  numberOfFollowers: number;
  numberOfFollowing: number;
  DOB?: Date;
  createdAt: Date;
  Posts: IPost[];
  favPost: IPost[];
  likedPost: IPost[];
}
