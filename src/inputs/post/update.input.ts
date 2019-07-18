import { InputType, Field } from 'type-graphql';
import { Post } from '../../models/post.model';

@InputType()
export class UpdatePostInput implements Partial<Post> {
  @Field({ nullable: true })
  body: string;
}
