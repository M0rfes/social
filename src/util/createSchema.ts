import { Query, Resolver, buildSchema } from 'type-graphql';
import { UserResolver } from '../resolvers/user/user.resolver';
import { CreateUserResolver } from '../resolvers/user/create.resolver';
import { FindOneUserResolver } from '../resolvers/user/findOne.resolver';
import { FindUserResolver } from '../resolvers/user/find.resolver';
import { LoginResolver } from '../resolvers/user/login.resolver';
import { DeleteUserResolver } from '../resolvers/user/delete.resolver';
import { FollowResolver } from '../resolvers/user/Follow.resolver';
import { UnFallowResolver } from '../resolvers/user/unFollow.resolver';
import { UpdateUserResolver } from '../resolvers/user/update.resolver';
import { CreatePostResolver } from '../resolvers/post/create.resolver';
import { UpdatePostResolver } from '../resolvers/post/update.resolver';
import { DeletePostResolver } from '../resolvers/post/delete.resolver';
import { FindPostResolver } from '../resolvers/post/find.resolver';
import { FindOnePostResolver } from '../resolvers/post/findOne.resolver';
import { ProfilePictureResolver } from '../resolvers/user/profilePitcher.resolver';
import { PostResolver } from '../resolvers/post/post.resolver';
import { DoUnDoVote } from '../resolvers/post/doUndoVote.resolver';

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
      FindOneUserResolver,
      FindUserResolver,
      LoginResolver,
      DeleteUserResolver,
      FollowResolver,
      UnFallowResolver,
      UpdateUserResolver,
      CreatePostResolver,
      UpdatePostResolver,
      DeletePostResolver,
      FindPostResolver,
      FindOnePostResolver,
      ProfilePictureResolver,
      PostResolver,
      DoUnDoVote,
    ],
  });

'{"query":"mutation AddProfilePitcher($pic: Upload){\n  addProfilePicture(picture:$pic)\n}"}';
