import { createResolver } from '../baseResolvers/create.resolver';
import { User, UserModel } from '../../models/user.model';
import { RegisterInput } from '../../inputs/user/register.input';

export const CreateUserResolver = createResolver(
  'User',
  User,
  RegisterInput,
  UserModel,
);
