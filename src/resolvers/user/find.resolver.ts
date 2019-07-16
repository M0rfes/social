import { User, UserModel } from '../../models/user.model';
import { FindUserInput } from '../../inputs/user/findUser.input';
import { auth } from '../../middlewares/auth.middleware';
import { findResolver } from '../baseResolvers/find.resolver';

export const FindUser = findResolver('Users', User, FindUserInput, UserModel, [
  auth,
]);
