import {
  Ctx,
  FieldResolver,
  Query,
  Root,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { User, UserModel } from '../../models/user.model';
import { MyContext } from '../../shared/myContext';
import { auth } from '../../middlewares/auth.middleware';
import { Post, PostModel } from '../../models/post.model';
import { Ref } from 'typegoose';
import { Arg } from 'type-graphql';
import { PaginationInput } from '../../inputs/pagination.input';
@Resolver(User)
export class UserResolver {
  @UseMiddleware(auth)
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    return await UserModel.findById((req as any).userId);
  }

  @FieldResolver(() => [User])
  async following(
    @Root() { _doc: user }: { _doc: User },
    @Ctx() { userLoader }: MyContext,
  ) {
    const f = await userLoader.loadMany(user.following);
    return f;
  }

  @FieldResolver(() => [User])
  async followers(
    @Root() { _doc: user }: { _doc: User },
    @Ctx() { userLoader }: MyContext,
  ) {
    const users = await userLoader.loadMany(user.followers);

    return users;
  }

  @UseMiddleware(auth)
  @FieldResolver(() => [Post])
  async posts(
    @Root() { _doc: { _id } }: { _doc: { _id: Ref<User> } },
    @Arg('pagination', { nullable: true }) pagination: PaginationInput,
  ) {
    const posts = await PostModel.find({ from: _id }, {}, pagination);
    return posts;
  }
  @UseMiddleware(auth)
  @Query(() => Boolean)
  async logout(): Promise<boolean> {
    // TODO: make logout
    return true;
  }
}
