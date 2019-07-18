import { updateResolver } from '../baseResolvers/update.resolver';
import { UpdatePostInput } from '../../inputs/post/update.input';
import { PostModel, Post } from '../../models/post.model';
import { auth } from '../../middlewares/auth.middleware';
export const UpdatePostResolver = updateResolver(
  'Post',
  Post,
  UpdatePostInput,
  PostModel,
  [auth],
);
