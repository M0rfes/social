import { registerEnumType } from 'type-graphql';

export enum Sort {
  asc = 'asc',
  des = 'des',
}

registerEnumType(Sort, {
  name: 'Sort', // this one is mandatory
  description: 'The basic directions', // this one is optional
});
