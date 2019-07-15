import { Query, Resolver, buildSchema } from 'type-graphql';
import { UserResolver } from '../resolvers/user.resolver';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World!';
  }
}

export const createSchema = () =>
  buildSchema({
    resolvers: [HelloResolver, UserResolver],
  });
