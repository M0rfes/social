import { ObjectType, Field, ID, Int, Root } from 'type-graphql';
import { Typegoose, prop, Ref, arrayProp } from 'typegoose';
import { User } from './user.model';
import { MediaModel } from './media.model';

@ObjectType()
export class Post extends Typegoose {
  @Field(() => ID)
  readonly id: Ref<Post>;

  @Field()
  @prop()
  readonly body: string;

  @Field(() => Post, { nullable: true })
  @prop({ ref: Post, index: true })
  to?: Ref<Post>;

  @Field(() => User)
  @prop({ ref: User, required: true, index: true })
  from: Ref<User>;

  @Field(() => MediaModel, { nullable: true })
  @prop()
  media?: MediaModel;

  @Field(() => [User])
  @arrayProp({ itemsRef: typeof User })
  upVote: Ref<User>[];

  @Field(() => [User])
  @arrayProp({ itemsRef: typeof User })
  downVote: Ref<User>[];

  @Field()
  @prop({ default: Date.now() })
  createdAt: Date;

  @Field(() => Int)
  totalUpVotes(@Root() { _doc }: { _doc: Post }) {
    return _doc.upVote.length;
  }

  @Field(() => Int)
  totalDownVotes(@Root() { _doc }: { _doc: Post }) {
    return _doc.downVote.length;
  }
}

export const PostModel = new Post().getModelForClass(Post, {
  schemaOptions: { collection: 'posts' },
});
