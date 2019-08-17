export class UserData {
  id: string = '1';
  displayName: string = 'morfes';
  displayImage: string = './alex.jpg';
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
