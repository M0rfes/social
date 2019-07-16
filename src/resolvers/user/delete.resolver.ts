import { User, UserModel } from '../../models/user.model';
import { auth } from '../../middlewares/auth.middleware';
import { DeleteResolver } from '../baseResolvers/delete.resolver';
import { IDInput } from '../../inputs/id.input';

export const DeleteUser = DeleteResolver('User', User, IDInput, UserModel, [
  auth,
]);
