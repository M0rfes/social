import { auth } from '../../middlewares/auth.middleware';
import { findResolver } from '../baseResolvers/find.resolver';
import { Post, PostModel } from '../../models/post.model';
import { FindPostInput } from '../../inputs/post/find.input';

export const FindPostResolver = findResolver(
  'Post',
  Post,
  FindPostInput,
  PostModel,
  [auth],
);
