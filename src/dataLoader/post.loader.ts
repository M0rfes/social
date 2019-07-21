import DataLoader from 'dataloader';
import { Ref } from 'typegoose';
import { PostModel, Post } from '../models/post.model';

type BU = (ids: Ref<Post>[]) => Promise<Post[]>;
const batchUsers: BU = async ids => {
  const users = await PostModel.find({ _id: ids });

  const postMap: { [key: string]: Post} = {};
  users.forEach(user => {
   postMap[user._id] = user;
  });
  return ids.map(id =>postMap[id as any]);
};
export const postLoader = () => new DataLoader<Ref<Post>,Post>(batchUsers);