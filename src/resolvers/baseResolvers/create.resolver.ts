import {
  ClassType,
  Resolver,
  Mutation,
  UseMiddleware,
  Arg,
} from 'type-graphql';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';
import { Model } from 'mongoose';
import { Ctx } from 'type-graphql';
import mongoose from 'mongoose';

export function createResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: Model<InstanceType<T>, {}> & T,
  middleware?: Middleware<any>[],
) {
  @Resolver()
  class BaseResolver {
    @Mutation(() => returnType, { name: `create${suffix}` })
    @UseMiddleware(...(middleware || []))
    async create(@Arg('data', () => inputType) data: any, @Ctx() { req }: any) {
      if (!middleware) {
        const e = new entity(data);
        return await e.save();
      }
      const ent = new entity({ from:mongoose.Types.ObjectId(req.userId), ...data });
      return await ent.save();
    }
  }

  return BaseResolver;
}
