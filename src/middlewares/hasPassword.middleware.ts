// import { genSalt, hash } from 'bcryptjs';
type PropertyDecoratorType = (target: any, Key: string | symbol) => void;
export const hasPassword = (): PropertyDecoratorType => async (target, Key) => {
  console.log(target[Key]);
};
