import { Ref } from 'typegoose';
import { User } from '../../models/user.model';
import { InputType, Field, ID } from 'type-graphql';
import { Post } from '../../models/post.model';

@InputType()
export class FindPost implements Partial<Post> {
  @Field(() => ID, { nullable: true })
  readonly id: Ref<Post>;

  @Field({ nullable: true })
  readonly body: string;

  @Field(() => Post, { nullable: true })
  to: Ref<Post>;

  @Field(() => User, { nullable: true })
  from: Ref<User>;
}
