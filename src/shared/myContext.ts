import { Request, Response } from 'express';

import { userLoader } from '../dataLoader/user.loader';
export interface MyContext {
  req: Request;
  res: Response;
  userLoader: ReturnType<typeof userLoader>;
}
