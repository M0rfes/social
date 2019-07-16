import { InputType, Field } from 'type-graphql';
import { User } from '../../models/user.model';
import { Length, IsEmail, IsDate } from 'class-validator';
import { IsDisplayNameUnique } from '../../util/isDisplayNameUnique.validator';
import { IsEmailUnique } from '../../util/isEmailUnique.validator';

@InputType()
export class FindUserInput implements Partial<User> {
  @Length(2, 255)
  @Field({ nullable: true })
  firstName: string;

  @Length(2, 255)
  @Field({ nullable: true })
  lastName: string;

  @Length(2, 255)
  @IsDisplayNameUnique()
  @Field({ nullable: true })
  displayName: string;

  @IsEmail()
  @IsEmailUnique()
  @Field({ nullable: true })
  email: string;

  @IsDate()
  @Field(() => Date, { nullable: true })
  DOB?: Date;
}
