import { Resolver, Mutation, UseMiddleware, Ctx, Arg, ID } from 'type-graphql';
import { Post, PostModel } from '../../models/post.model';
import { auth } from '../../middlewares/auth.middleware';
import { Ref } from 'typegoose';

@Resolver(Post)
export class DoUnDoVote {
  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async doUpVote(@Arg('id', () => ID) pid: Ref<Post>, @Ctx() { req }: any) {
    const id = req.userId;
    const post = await PostModel.findById(pid);
    if (!post) return false;
    if (post.upVote.includes(id)) return true;
    await post.upVote.push(id);
    await post.save();
    return true;
  }

  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async unDoUpVote(@Arg('id', () => ID) pid: Ref<Post>, @Ctx() { req }: any) {
    const id = req.userId;
    const post = await PostModel.findById(pid);
    if (!post) return false;
    if (!post.upVote.includes(id)) return true;
    await (post.upVote as any).pull(id);
    await post.save();
    return true;
  }

  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async doDownVote(@Arg('id', () => ID) pid: Ref<Post>, @Ctx() { req }: any) {
    const id = req.userId;
    const post = await PostModel.findById(pid);
    if (!post) return false;
    if (post.downVote.includes(id)) return true;
    await post.downVote.push(id);
    await post.save();
    return true;
  }

  @UseMiddleware(auth)
  @Mutation(() => Boolean)
  async unDoDownVote(@Arg('id', () => ID) pid: Ref<Post>, @Ctx() { req }: any) {
    const id = req.userId;
    const post = await PostModel.findById(pid);
    if (!post) return false;
    if (!post.downVote.includes(id)) return true;
    await (post.downVote as any).pull(id);
    await post.save();
    return true;
  }
}
