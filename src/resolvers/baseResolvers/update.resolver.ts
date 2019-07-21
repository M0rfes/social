import {
  ClassType,
  Resolver,
  Mutation,
  UseMiddleware,
  Arg,
  Ctx,
} from 'type-graphql';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';
import { Model } from 'mongoose';

export function updateResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: Model<InstanceType<T>, {}> & T,
  middleware?: Middleware<any>[],
) {
  @Resolver(returnType)
  class BaseResolver {
    @Mutation(() => returnType, { name: `update${suffix}`, nullable: true })
    @UseMiddleware(...(middleware || []))
    async create(@Arg('data', () => inputType) data: any, @Ctx() { req }: any) {
      if (!!data.id) {
        const model = await entity.findById(data.id);
        if (!model) {
          return null;
        }
        const { id: pid, ...rest } = data as any;
        await model.updateOne(rest);
        await model.save();
        const np = await entity.findById(pid);
        return np;
      }
      const id = req.userId;
      const user = await entity.findById(id);
      if (!user) {
        return null;
      }
      await user.updateOne(data);
      await user.save();
      return await entity.findById(id);
    }
  }

  return BaseResolver;
}
