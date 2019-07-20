import { findOneResolver } from "../baseResolvers/findone.resolver";
import { Post, PostModel } from '../../models/post.model';
import { FindPostInput } from '../../inputs/post/find.input';
import { auth } from '../../middlewares/auth.middleware';

export const FindOnePostResolver = findOneResolver('Post', Post, FindPostInput, PostModel, [auth])