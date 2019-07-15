import { InputType, Field } from 'type-graphql';
import { Length, IsDate, IsEmail } from 'class-validator';
import { User } from '../models/user.model';
import { IsEmailUnique } from '../util/isEmailUnique.validator';
import { IsDisplayNameUnique } from '../util/isDisplayNameUnique.validator';

@InputType()
export class RegisterInput implements Partial<User> {
  @Length(2, 255)
  @Field()
  firstName: string;

  @Length(2, 255)
  @Field()
  lastName: string;

  @Length(2, 255)
  @IsDisplayNameUnique()
  @Field()
  displayName: string;

  @IsEmail()
  @IsEmailUnique()
  @Field()
  email: string;

  @Length(6, 255)
  @Field()
  password: string;

  @IsDate()
  @Field(() => Date, { nullable: true })
  DOB?: Date;
}
