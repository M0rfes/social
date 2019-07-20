import { InputType, Field } from 'type-graphql';
import { Post } from '../../models/post.model';
import { MediaModel } from '../../models/media.model';
import { MediaInput } from './media.input';

@InputType()
export class CreatePostInput implements Partial<Post> {
  @Field()
  body: string;

  @Field(() => MediaInput, { nullable: true })
  media: MediaModel
}
