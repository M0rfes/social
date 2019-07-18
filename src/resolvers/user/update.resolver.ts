import { updateResolver } from '../baseResolvers/update.resolver';
import { UpdateInput } from '../../inputs/user/update.input';
import { UserModel, User } from '../../models/user.model';
import { auth } from '../../middlewares/auth.middleware';

export const UpdateUserResolver = updateResolver(
  'User',
  User,
  UpdateInput,
  UserModel,
  [auth],
);
