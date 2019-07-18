import { ClassType, Resolver, UseMiddleware, Arg, Int } from 'type-graphql';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';
import { Model } from 'mongoose';
import { Query } from 'type-graphql';

export function findResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: Model<InstanceType<T>, {}> & T,
  middleware?: Middleware<any>[],
) {
  @Resolver()
  class BaseResolver {
    @Query(() => [returnType], { name: `find${suffix}` })
    @UseMiddleware(...(middleware || []))
    async find(
      @Arg('data', () => inputType, { nullable: true }) data: X,
      @Arg('limit', () => Int, { nullable: true }) limit: number,
    ) {
      if (!!data) {
        return await entity.find(data).limit(limit);
      }
      const users = await entity.find().limit(limit);
      return users;
    }
  }

  return BaseResolver;
}
