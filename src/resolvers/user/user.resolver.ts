import {
  Resolver,
  Query,
  Ctx,
  UseMiddleware,
  FieldResolver,
  Root,
  Int,
} from 'type-graphql';
import { User } from '../../models/user.model';
import { UserModel } from '../../models/user.model';
import { MyContext } from '../../shared/myContext';
import { auth } from '../../middlewares/auth.middleware';
@Resolver(User)
export class UserResolver {
  @UseMiddleware(auth)
  @Query(() => User)
  async me(@Ctx() { req }: MyContext) {
    return await UserModel.findById((req as any).userId);
  }

  @UseMiddleware(auth)
  @FieldResolver(() => [User])
  async following(@Root() { _doc: user }: { _doc: User }) {
    const f = await user.following.map(id => UserModel.findById(id));
    return f;
  }
  @UseMiddleware(auth)
  @FieldResolver(() => [User])
  async followers(@Root() { _doc: user }: { _doc: User }) {
    const f = await UserModel.find({ following: user.id });
    return f;
  }

  @FieldResolver(() => Int)
  async numOfFollowers(@Root() doc: { _doc: User }): Promise<number> {
    const u = await this.followers(doc);
    return u.length;
  }

  @UseMiddleware(auth)
  @Query(() => Boolean)
  async logout(): Promise<boolean> {
    // TODO: make logout
    return true;
  }
}
