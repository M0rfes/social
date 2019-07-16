import { prop, Typegoose } from 'typegoose';
import { ObjectType, Field, ID, Root } from 'type-graphql';
import { Schema } from 'mongoose';
@ObjectType()
export class User extends Typegoose {
  @Field(() => ID)
  readonly id: Schema.Types.ObjectId;

  @Field()
  @prop({ required: true })
  readonly firstName: string;

  @Field()
  @prop({ required: true })
  readonly lastName: string;

  @Field()
  @prop({ required: true, unique: true })
  displayName: string;

  @Field()
  @prop({ required: true, unique: true })
  readonly email: string;

  @prop({ required: true })
  password: string;

  @Field(() => Date, { nullable: true })
  @prop() // YYYY-MM-DD
  readonly DOB?: Date;

  @Field()
  name(@Root() { _doc: doc }: { _doc: User }): string {
    return `${doc.firstName} ${doc.lastName}`;
  }
}

export const UserModel = new User().getModelForClass(User, {
  schemaOptions: { collection: 'users' },
});
