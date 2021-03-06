import { InputType, Field } from 'type-graphql';
import { Length, IsDate, IsEmail, IsEnum, IsUrl } from 'class-validator';
import { User } from '../../models/user.model';
import { IsEmailUnique } from '../../util/isEmailUnique.validator';
import { IsDisplayNameUnique } from '../../util/isDisplayNameUnique.validator';
import { Gender } from '../../enums/genders.enum';

@InputType()
export class RegisterInput implements Partial<User> {
  @Length(2, 255)
  @Field()
  firstName: string;

  @Length(2, 255)
  @Field()
  lastName: string;

  @Length(2, 255)
  @IsDisplayNameUnique({ message: 'display name already in use' })
  @Field()
  displayName: string;

  @IsEmail()
  @IsEmailUnique({ message: 'Email already in use' })
  @Field()
  email: string;

  @Length(6, 255)
  @Field()
  password: string;

  @IsDate()
  @Field(() => Date, { nullable: true })
  DOB?: Date;

  @IsEnum(Gender)
  @Field(() => Gender, { nullable: true })
  gender?: Gender;

  @IsUrl()
  @Field({ nullable: true })
  displayImage: string;

  @IsUrl()
  @Field({ nullable: true })
  coverImage: string;

  @Length(10, 30)
  @Field({ nullable: true })
  bio: string;
}
