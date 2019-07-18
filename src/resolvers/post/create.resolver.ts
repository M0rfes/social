import { createResolver } from '../baseResolvers/create.resolver';
import { Post, PostModel } from '../../models/post.model';
import { CreatePostInput } from '../../inputs/post/create.input';
import { auth } from '../../middlewares/auth.middleware';

export const CreatePostResolver = createResolver(
  'Post',
  Post,
  CreatePostInput,
  PostModel,
  [auth],
);
