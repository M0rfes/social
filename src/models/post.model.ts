import { ObjectType, Field, ID } from 'type-graphql';
import { Typegoose, prop, Ref } from 'typegoose';
import { User } from './user.model';
import { MediaModel } from './media.model';
import { Interactions } from './interactio';

@ObjectType()
export class Post extends Typegoose {
  @Field(() => ID)
  readonly id: Ref<Post>;

  @Field()
  @prop()
  readonly body: string;

  @Field(() => Post, { nullable: true })
  @prop({ ref: Post })
  to?: Ref<Post>;

  @Field(() => User)
  @prop({ ref: User, required: true })
  from: Ref<User>;

  @Field(() => MediaModel, { nullable: true })
  @prop()
  media?: MediaModel

  @Field(() => Interactions, { nullable: true })
  interactions?: Interactions
}

export const PostModel = new Post().getModelForClass(Post, {
  schemaOptions: { collection: 'posts' },
});

