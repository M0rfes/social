import { Query, Resolver, buildSchema } from 'type-graphql';
import { UserResolver } from '../resolvers/user/user.resolver';
import { CreateUserResolver } from '../resolvers/user/create.resolver';
import { FIndOneUser as FindOneUser } from '../resolvers/user/findOne.resolver';
import { FindUser } from '../resolvers/user/find.resolver';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World!';
  }
}

export const createSchema = () =>
  buildSchema({
    resolvers: [
      HelloResolver,
      UserResolver,
      CreateUserResolver,
      FindOneUser,
      FindUser,
    ],
  });
