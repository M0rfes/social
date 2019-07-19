import { prop, Typegoose, Ref, arrayProp, pre } from 'typegoose';
import { ObjectType, Field, ID, Root } from 'type-graphql';
import { Gender } from '../enums/genders.enum';
import { genSalt, hash } from 'bcryptjs';
import { Post } from './post.model';
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
  readonly id: Ref<User>;

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

  @Field(() => [User])
  @arrayProp({ itemsRef: User })
  following: Ref<User>[];

  @Field(() => [User])
  @arrayProp({ itemsRef: User })
  followers: Ref<User>[];

  @Field(() => [Post])
  posts: [Post];

  @Field()
  numOfFollowing(@Root() { _doc: doc }: { _doc: User }): number {
    return doc.following.length;
  }

  @Field()
  numOfFollowers(@Root() { _doc: doc }: { _doc: User }): number {
    return doc.followers.length;
  }

  @Field()
  name(@Root() { _doc: doc }: { _doc: User }): string {
    return `${doc.firstName} ${doc.lastName}`;
  }
}

export const UserModel = new User().getModelForClass(User, {
  schemaOptions: { collection: 'users' },
});
