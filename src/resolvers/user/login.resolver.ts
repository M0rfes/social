import { Resolver, Arg, Query } from 'type-graphql';
import { User } from '../../models/user.model';
import { UserModel } from '../../models/user.model';
import { LoginInput } from '../../inputs/user/login.input';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Token } from '../../models/token';
@Resolver(User)
export class LoginResolver {
  @Query(() => Token, { nullable: true })
  async login(@Arg('data') { email, password }: LoginInput) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return null;
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return null;
    }
    const token = await jwt.sign({ userId: user.id }, 'secreat', {
      expiresIn: '48hr',
    });
    return { token };
  }
}
