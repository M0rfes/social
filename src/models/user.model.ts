import { prop, Typegoose, Ref, arrayProp, pre } from 'typegoose';
import { ObjectType, Field, ID, Root } from 'type-graphql';
import { Schema } from 'mongoose';
import { Gender } from '../enums/genders.enum';
import { genSalt, hash } from 'bcryptjs';
@pre<User>('save', function(next) {
  if (!this.isModified('password')) {
    next();
  }
  genSalt(10)
    .then(salt => hash(this.password, salt))
    .then(has => {
      this.password = has;
      next();
    });
})
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
  @Field(() => Gender)
  @prop({ enum: Gender, default: Gender.unspecified })
  gender?: Gender;

  @Field(() => [User], { defaultValue: [] })
  @arrayProp({ itemsRef: User, default: [] })
  following: Ref<User>[];

  @Field(() => [User])
  followers: Ref<User>[];

  @Field()
  numOfFollowing(@Root() { _doc: doc }: { _doc: User }): number {
    return doc.following.length;
  }

  @Field()
  name(@Root() { _doc: doc }: { _doc: User }): string {
    return `${doc.firstName} ${doc.lastName}`;
  }
}

export const UserModel = new User().getModelForClass(User, {
  schemaOptions: { collection: 'users' },
});
