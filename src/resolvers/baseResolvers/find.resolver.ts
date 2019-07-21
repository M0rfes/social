import { ClassType, Resolver, UseMiddleware, Arg } from 'type-graphql';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';
import { Model } from 'mongoose';
import { Query } from 'type-graphql';
import { PaginationInput } from '../../inputs/pagination.input';

export function findResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: Model<InstanceType<T>, {}> & T,
  middleware?: Middleware<any>[],
) {
  @Resolver(returnType)
  class BaseResolver {
    @Query(() => [returnType], { name: `find${suffix}` })
    @UseMiddleware(...(middleware || []))
    async find(
      @Arg('data', () => inputType, {nullable: true }) data: X,
      @Arg('pagination', () => PaginationInput, { nullable: true }) pagination: PaginationInput
    ) {
      if (!!data) {
        return await entity.find(data, {}, pagination);
      }
      const users = await entity.find({}, {}, pagination);
      return users;
    }
  }

  return BaseResolver;
}
