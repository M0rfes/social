import {
  Mutation,
  Resolver,
  Arg,
  Query,
  Ctx,
  UseMiddleware,
} from 'type-graphql';
import { User } from '../models/user.model';
import { UserModel } from '../models/user.model';
import { RegisterInput } from '../inputs/register.input';
import { hash } from 'bcryptjs';
import { LoginInput } from '../inputs/login.input';
import { MyContext } from '../shared/myContext';
import { compare } from 'bcryptjs';
import { auth } from '../middlewares/auth.middleware';
import { FindUserInput } from '../inputs/findUser.input';

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async allUsers(@Arg('data', { nullable: true }) data?: FindUserInput) {
    if (!!data) {
      return await UserModel.find({ ...data }).exec();
    }
    const users = await UserModel.find().exec();
    console.log(users);
    return users;
  }

  @Query(() => User)
  async login(@Arg('data') data: LoginInput, @Ctx() { req }: MyContext) {
    const user = await UserModel.findOne(data);
    if (!user) {
      return null;
    }
    const isMatch = await compare(data.password, user.password);
    if (!isMatch) {
      return null;
    }
    req.session!.userId = user.id;
    return user;
  }

  @UseMiddleware(auth)
  @Query(() => User)
  async me(@Ctx() { req }: MyContext) {
    return await UserModel.findById(req.session!.userId);
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

  @Mutation(() => User)
  async register(
    @Arg('data')
    data: RegisterInput,
    @Ctx() { req }: MyContext,
  ) {
    const password = await hash(data.password, 10);
    const user = await UserModel.create({ ...data, password });
    req.session!.userId = user.id;
    return user;
  }
}
