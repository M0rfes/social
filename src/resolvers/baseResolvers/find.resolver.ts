import { ClassType, Resolver, UseMiddleware, Arg } from 'type-graphql';
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
    async find(@Arg('data', () => inputType, { nullable: true }) data: X) {
      if (!!data) {
        return await entity.find(data).exec();
      }
      const users = await entity.find().exec();
      console.log(users);
      return users;
    }
  }

  return BaseResolver;
}
