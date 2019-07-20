import { ObjectType, Field, ID } from 'type-graphql';
import { Typegoose, prop, Ref } from 'typegoose';
import { User } from './user.model';
import { MediaModel } from './media.model';

@ObjectType()
export class Post extends Typegoose {
  @Field(() => ID)
  readonly id: Ref<Post>;

  @Field()
  @prop()
  readonly body: string;

  @Field(() => Post)
  @prop({ ref: Post })
  to: Ref<Post>;

  @Field(() => User)
  @prop({ ref: User, required: true })
  from: Ref<User>;

  @Field(() => MediaModel)
  @prop()
  media: MediaModel
}

export const PostModel = new Post().getModelForClass(Post, {
  schemaOptions: { collection: 'posts' },
});

