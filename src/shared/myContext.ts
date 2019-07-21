import { Request, Response } from 'express';

import { userLoader } from '../dataLoader/user.loader';
import { postLoader } from '../dataLoader/post.loader';
export interface MyContext {
  req: Request;
  res: Response;
  userLoader: ReturnType<typeof userLoader>;
  postLoader: ReturnType<typeof postLoader>;
}
