import {
  ClassType,
  Resolver,
  UseMiddleware,
  Arg,
  Mutation,
} from 'type-graphql';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';
import { Model } from 'mongoose';

export function DeleteResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: Model<InstanceType<T>, {}> & T,
  middleware?: Middleware<any>[],
) {
  @Resolver()
  class BaseResolver {
    @Mutation(() => returnType, { name: `delete${suffix}` })
    @UseMiddleware(...(middleware || []))
    async delete(@Arg('data', () => inputType) { id }: any) {
      return await entity.findByIdAndDelete(id);
    }
  }

  return BaseResolver;
}
