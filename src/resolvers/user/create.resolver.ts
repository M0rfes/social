import { Resolver, Arg, Mutation } from 'type-graphql';
import jwt from 'jsonwebtoken';
import { User } from '../../models/user.model';
import { UserModel } from '../../models/user.model';
import { genSalt, hash } from 'bcryptjs';
import { RegisterInput } from '../../inputs/user/register.input';
import { Token } from '../../models/token';

@Resolver(User)
export class CreateUserResolver {
  @Mutation(() => Token)
  async CreateUser(@Arg('data') data: RegisterInput) {
    const salt = await genSalt(10);
    const hashPass = await hash(data.password, salt);
    const user = await UserModel.create({ ...data, password: hashPass });
    const token = await jwt.sign({ userId: user.id }, 'secreat');
    console.log(token);
    return { token };
  }
}
