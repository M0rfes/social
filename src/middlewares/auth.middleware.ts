import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../shared/myContext';

export const auth: MiddlewareFn<MyContext> = async (
  { context: { req } },
  next,
) => {
  const id = req.session!.userId;
  if (!id) {
    throw new Error('unauthorized');
  }
  return await next();
};
