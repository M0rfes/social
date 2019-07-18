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
import { MyContext } from '../../shared/myContext';

export function updateResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: Model<InstanceType<T>, {}> & T,
  middleware?: Middleware<any>[],
) {
  @Resolver()
  class BaseResolver {
    @Mutation(() => returnType, { name: `update${suffix}`, nullable: true })
    @UseMiddleware(...(middleware || []))
    async create(
      @Arg('data', () => inputType) data: any,
      @Ctx() { req }: MyContext,
    ) {
      const id = (req as any).userId;
      if (id) {
        const user = await entity.findById(id);
        if (!user) {
          return null;
        }
        await user.updateOne(data);
        await user.save();
        return await entity.findById(id);
      }
      const model = await entity.findById(data.id);
      if (!model) {
        return null;
      }
      const { _id, ...rest } = data as any;
      await model.updateOne(rest);
      await model.save();
      return entity.findById(_id);
    }
  }

  return BaseResolver;
}
