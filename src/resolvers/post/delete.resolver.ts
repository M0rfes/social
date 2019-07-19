import { auth } from '../../middlewares/auth.middleware';
import { DeleteResolver } from '../baseResolvers/delete.resolver';
import { IDInput } from '../../inputs/id.input';
import { Post, PostModel } from '../../models/post.model';

export const DeletePostResolver = DeleteResolver(
  'Post',
  Post,
  IDInput,
  PostModel,
  [auth],
);
