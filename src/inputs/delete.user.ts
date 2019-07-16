import { InputType, Field, ID } from 'type-graphql';
import { User } from '../models/user.model';
import { Schema } from 'mongoose';

@InputType()
export class DeleteInput implements Partial<User> {
  @Field(() => ID)
  id: Schema.Types.ObjectId;
}
