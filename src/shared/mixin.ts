import { ClassType, InputType } from 'type-graphql';

export const Mixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class Input extends BaseClass {}
  return Input;
};
