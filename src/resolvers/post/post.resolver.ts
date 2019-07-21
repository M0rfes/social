import { Resolver, FieldResolver, Root, Ctx } from 'type-graphql';
import { Post } from '../../models/post.model';
import { MyContext } from '../../shared/myContext';
import { User } from '../../models/user.model';

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => Post, { nullable: true })
  to(@Root() { _doc }: any, @Ctx() { postLoader }: MyContext) {
    if (!_doc.to) return null;
    else return postLoader.load(_doc.to);
  }

  @FieldResolver(() => User)
  from(@Root() { _doc }: any, @Ctx() { userLoader }: MyContext) {
    return userLoader.load(_doc.from);
  }

  @FieldResolver(() => User)
  upVote(@Root() { _doc }: { _doc: Post }, @Ctx() { userLoader }: MyContext) {
    const users = userLoader.loadMany(_doc.upVote);
    return users;
  }

  @FieldResolver(() => User)
  downVote(@Root() { _doc }: { _doc: Post }, @Ctx() { userLoader }: MyContext) {
    const users = userLoader.loadMany(_doc.downVote);
    return users;
  }
}
