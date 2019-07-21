import { InputType, Field, ID } from 'type-graphql';
import { Post } from '../../models/post.model';
import { MediaModel } from '../../models/media.model';
import { MediaInput } from './media.input';
import { Ref } from 'typegoose';

@InputType()
export class CreatePostInput implements Partial<Post> {
  @Field()
  body: string;

  @Field(() => MediaInput, { nullable: true })
  media: MediaModel

  @Field(() => ID, { nullable: true })
  to: Ref<Post>
}
