import { Resolver, Mutation, Arg, ID, Ctx, UseMiddleware } from 'type-graphql';
import { User, UserModel } from '../../models/user.model';
import { Ref } from 'typegoose';
import { Post } from '../../models/post.model';
import { auth } from '../../middlewares/auth.middleware';

@Resolver(User)
export class FavPostResolver {
  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async addPostToFav(@Arg('ID', () => ID) id: Ref<Post>, @Ctx() { req }: any) {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return false;
    }
    if (user.favPosts.includes(id)) {
      return true;
    }
    user.favPosts.push(id);
    await user.save();
    return true;
  }
  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async removePostFromFav(
    @Arg('ID', () => ID) id: Ref<Post>,
    @Ctx() { req }: any,
  ) {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return false;
    }
    if (!user.favPosts.includes(id)) {
      return true;
    }
    (user.favPosts as any).pull(id);
    await user.save();
    return true;
  }
}
