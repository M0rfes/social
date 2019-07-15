import { UserModel } from '../models/user.model';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
class Email implements ValidatorConstraintInterface {
  validate(email: string) {
    return UserModel.findOne({ email }).then(user => {
      if (user) return false;
      return true;
    });
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: Email,
    });
  };
}
