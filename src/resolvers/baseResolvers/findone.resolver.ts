import { ClassType, Resolver, UseMiddleware, Arg } from 'type-graphql';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';
import { Model } from 'mongoose';
import { Query } from 'type-graphql';

export function findOneResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: Model<InstanceType<T>, {}> & T,
  middleware?: Middleware<any>[],
) {
  @Resolver(returnType)
  class BaseResolver {
    @Query(() => returnType, { name: `find${suffix}` })
    @UseMiddleware(...(middleware || []))
    async findOne(@Arg('data', () => inputType) data: any) {
      if (data.id) {
        return await entity.findById(data.id);
      }
      return await entity.findOne(data);
    }
  }

  return BaseResolver;
}
