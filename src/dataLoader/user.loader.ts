import DataLoader from 'dataloader';
import { User, UserModel } from '../models/user.model';
import { Ref } from 'typegoose';

type BU = (ids: Ref<User>[]) => Promise<User[]>;
const batchUsers: BU = async ids => {
  const users = await UserModel.find()
    .where('_id')
    .in(ids);
  const userMap: { [key: string]: User } = {};
  users.forEach(user => {
    userMap[user._id] = user;
  });
  return ids.map(id => userMap[id as any]);
};
export const userLoader = () => new DataLoader<Ref<User>, User>(batchUsers);
