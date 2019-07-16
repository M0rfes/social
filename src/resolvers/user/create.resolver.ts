import { Resolver, Arg, Mutation, Ctx } from 'type-graphql';
import { User } from '../../models/user.model';
import { UserModel } from '../../models/user.model';
import { genSalt, hash } from 'bcryptjs';
import { RegisterInput } from '../../inputs/user/register.input';
import { MyContext } from '../../shared/myContext';

@Resolver(User)
export class CreateUserResolver {
  @Mutation(() => User)
  async CreateUser(
    @Arg('data') data: RegisterInput,
    @Ctx() { req }: MyContext,
  ) {
    const salt = await genSalt(5);
    const hashPass = await hash(data.password, salt);
    const user = await UserModel.create({ ...data, password: hashPass });
    req.session!.userId = user.id;
    return user;
  }
}
