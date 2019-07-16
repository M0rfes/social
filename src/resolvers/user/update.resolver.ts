import { Resolver, Arg, Mutation, Ctx, UseMiddleware } from 'type-graphql';
import { User } from '../../models/user.model';
import { UserModel } from '../../models/user.model';
import { MyContext } from '../../shared/myContext';
import { auth } from '../../middlewares/auth.middleware';
import { UpdateInput } from '../../inputs/user/update.input';

@Resolver(User)
export class UpdateUserResolver {
  @UseMiddleware(auth)
  @Mutation(() => User, { nullable: true })
  async UpdateUser(@Arg('data') data: UpdateInput, @Ctx() { req }: MyContext) {
    const id = (req as any).userId;
    const user = await UserModel.findById(id);
    if (!user) {
      return null;
    }
    try {
      await user.updateOne(data);
    } catch {
      return null;
    }
    return await UserModel.findById(id);
  }
}
