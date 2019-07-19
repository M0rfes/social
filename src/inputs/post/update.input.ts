import { InputType, Field, ID } from 'type-graphql';
import { Post } from '../../models/post.model';
import { Ref } from 'typegoose';

@InputType()
export class UpdatePostInput implements Partial<Post> {
  @Field(() => ID)
  id: Ref<Post>;
  @Field({ nullable: true })
  body: string;
}
