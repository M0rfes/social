import {
  Ctx,
  FieldResolver,
  Query,
  Root,
  Resolver,
  UseMiddleware,
  Int,
} from 'type-graphql';
import { User, UserModel } from '../../models/user.model';
import { MyContext } from '../../shared/myContext';
import { auth } from '../../middlewares/auth.middleware';
import { Post, PostModel } from '../../models/post.model';
@Resolver(User)
export class UserResolver {
  @UseMiddleware(auth)
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    return await UserModel.findById((req as any).userId);
  }
  // TODO: find a better way to resolve follower
  @UseMiddleware(auth)
  @FieldResolver(() => [User])
  async following(
    @Root() { _doc: user }: { _doc: User },
    @Ctx() { userLoader }: MyContext,
  ) {
    const f = await userLoader.loadMany(user.following);
    return f;
  }
  @UseMiddleware(auth)
  @FieldResolver(() => [User])
  async followers(@Root() { _doc: user }: { _doc: any }) {
    const users = await UserModel.find()
      .where('following')
      .equals(user._id);
    return users;
  }

  @FieldResolver(() => Int)
  async numOfFollowers(@Root() { _doc: user }: { _doc: any }): Promise<number> {
    const u = await UserModel.find({ following: user._id }).count();
    return u;
  }

  @UseMiddleware(auth)
  @FieldResolver(() => [Post])
  async post(@Ctx() { req }: MyContext) {
    const posts = await PostModel.find({ from: (req as any).id });
    return posts;
  }
  @UseMiddleware(auth)
  @Query(() => Boolean)
  async logout(): Promise<boolean> {
    // TODO: make logout
    return true;
  }
}
