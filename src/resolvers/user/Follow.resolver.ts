import { Resolver, Mutation, UseMiddleware, Ctx, Arg, ID } from 'type-graphql';
import { User, UserModel } from '../../models/user.model';
import { auth } from '../../middlewares/auth.middleware';
import { MyContext } from '../../shared/myContext';
import { Ref } from 'typegoose';

@Resolver(User)
export class FollowResolver {
  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async Follow(@Arg('id', () => ID) id: Ref<User>, @Ctx() { req }: MyContext) {
    const uid: string = (req as any).userId;
    if (uid === String(id)) {
      return false;
    }
    const user = await UserModel.findById(uid);
    const Ouser = await UserModel.findById(id);
    if (!user || !Ouser || user.following.includes(id)) {
      return false;
    }
    user.following.push(id);
    Ouser.followers.push(uid as any);
    Ouser.save();
    user.save();
    return true;
  }
}
