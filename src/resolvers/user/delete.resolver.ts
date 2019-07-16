import { User, UserModel } from '../../models/user.model';
import { auth } from '../../middlewares/auth.middleware';
import { DeleteResolver } from '../baseResolvers/delete.resolver';
import { DeleteInput } from '../../inputs/delete.user';

export const DeleteUser = DeleteResolver('User', User, DeleteInput, UserModel, [
  auth,
]);
