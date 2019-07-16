import { registerEnumType } from 'type-graphql';
export enum Gender {
  male = 'male',
  female = 'female',
  unspecified = 'unspecified',
}

registerEnumType(Gender, {
  name: 'Gender', // this one is mandatory
  description: 'The basic directions', // this one is optional
});
