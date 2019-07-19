import { Resolver, Mutation, UseMiddleware, Ctx, Arg, ID } from 'type-graphql';
import { User, UserModel } from '../../models/user.model';
import { auth } from '../../middlewares/auth.middleware';
import { MyContext } from '../../shared/myContext';
import { Ref } from 'typegoose';

@Resolver(User)
export class UnFallowResolver {
  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async unFollow(
    @Arg('id', () => ID) id: Ref<User>,
    @Ctx() { req }: MyContext,
  ) {
    const uid = (req as any).userId;
    const user = await UserModel.findById(uid);
    const Ouser = await UserModel.findById(id);
    if (!user || !Ouser) {
      return false;
    }
    await user.updateOne({}, { $pull: { following: id } });
    await Ouser.updateOne({}, { $pull: { followers: uid } });
    await user.save();
    await Ouser.save();
    return true;
  }
}
