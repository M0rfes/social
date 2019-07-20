import { MediaModel } from './../../models/media.model';
import { InputType, Field, ID } from 'type-graphql';
import { Post } from '../../models/post.model';
import { Ref } from 'typegoose';
import { MediaInput } from './media.input';

@InputType()
export class UpdatePostInput implements Partial<Post> {
  @Field(() => ID)
  id: Ref<Post>;
  @Field({ nullable: true })
  body: string;

  @Field(() => MediaInput, { nullable: true })
  media: MediaModel
}
