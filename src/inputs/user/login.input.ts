import { InputType, Field } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';
import { User } from '../../models/user.model';

@InputType()
export class LoginInput implements Partial<User> {
  @IsEmail()
  @Field()
  email: string;

  @Length(6, 255)
  @Field()
  password: string;
}
