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
import { InvalidTokens } from '../../models/token';
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

  @FieldResolver(() => [Post])
  async favPosts(
    @Root() { _doc }: { _doc: User },
    @Ctx() { postLoader }: MyContext,
  ) {
    return postLoader.loadMany(_doc.favPosts);
  }

  @FieldResolver(() => [Post])
  async likedPosts(
    @Root() { _doc: { _id } }: { _doc: { _id: Ref<User> } },
    @Arg('pagination', { nullable: true }) pagination: PaginationInput,
  ) {
    console.log(_id);
    const posts = await PostModel.find({}, {}, pagination)
      .where('upVote')
      .equals(_id);
    return posts;
  }

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
  async logout(@Ctx() { req }: MyContext): Promise<boolean> {
    const token = req.header('x-auth-token');
    const tok = new InvalidTokens({ int: token });
    await tok.save();
    return true;
  }
}
