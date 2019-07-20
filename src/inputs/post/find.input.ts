import { Ref } from 'typegoose';
import { User } from '../../models/user.model';
import { InputType, Field, ID } from 'type-graphql';
import { Post } from '../../models/post.model';

@InputType()
export class FindPostInput implements Partial<Post> {
  @Field(() => ID, { nullable: true })
  readonly id: Ref<Post>;

  @Field({ nullable: true })
  readonly body: string;

  @Field(() => ID, { nullable: true })
  to: Ref<Post>;

  @Field(() => ID, { nullable: true })
  from: Ref<User>;
}
