import { InputType, Field } from 'type-graphql';
import { Post } from '../../models/post.model';

@InputType()
export class CreatePostInput implements Partial<Post> {
  @Field()
  body: string;
}
