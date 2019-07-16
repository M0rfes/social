import { Resolver, Arg, Query, Ctx, UseMiddleware } from 'type-graphql';
import { User } from '../../models/user.model';
import { UserModel } from '../../models/user.model';
import { LoginInput } from '../../inputs/user/login.input';
import { MyContext } from '../../shared/myContext';
import { compare } from 'bcryptjs';
import { auth } from '../../middlewares/auth.middleware';

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async login(
    @Arg('data') { email, password }: LoginInput,
    @Ctx() { req }: MyContext,
  ) {
    const user = await UserModel.findOne({ email });
    console.log(user, password);
    if (!user) {
      return null;
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return null;
    }
    req.session!.userId = user.id;
    console.log(req.session);
    return user;
  }

  @UseMiddleware(auth)
  @Query(() => User)
  async me(@Ctx() { req }: MyContext) {
    return await UserModel.findById((req as any).userId);
  }

  @UseMiddleware(auth)
  @Query(() => Boolean)
  async logout(@Ctx() ctx: MyContext): Promise<boolean> {
    return new Promise((res, rej) =>
      ctx.req.session!.destroy(err => {
        if (err) {
          console.log(err);
          return rej(false);
        }

        ctx.res.clearCookie('qid');
        return res(true);
      }),
    );
  }
}
