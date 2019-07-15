import { UserModel } from '../models/user.model';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
class DisplayName implements ValidatorConstraintInterface {
  validate(displayName: string) {
    return UserModel.findOne({ displayName }).then(user => {
      if (user) return false;
      return true;
    });
  }
}

export function IsDisplayNameUnique(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: DisplayName,
    });
  };
}
