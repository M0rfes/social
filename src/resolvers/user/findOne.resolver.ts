import { findOneResolver } from '../baseResolvers/findone.resolver';
import { User, UserModel } from '../../models/user.model';
import { FindUserInput } from '../../inputs/user/findUser.input';
import { auth } from '../../middlewares/auth.middleware';

export const FindOneUser = findOneResolver(
  'OneUser',
  User,
  FindUserInput,
  UserModel,
  [auth],
);
