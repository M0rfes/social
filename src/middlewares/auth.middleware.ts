import jwt from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../shared/myContext';

export const auth: MiddlewareFn<MyContext> = async (
  { context: { req } },
  next,
) => {
  const token = req.header('x-auth-token');
  if (!token) {
    throw new Error('unauthorize');
  }
  try {
    const decode = jwt.verify(token, 'secreat');
    (req as any).userId = (decode as any).userId;
  } catch {
    throw new Error('unauthorize');
  }
  return await next();
};
