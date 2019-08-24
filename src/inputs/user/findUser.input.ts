import { InputType, Field, ID } from 'type-graphql';
import { User } from '../../models/user.model';
import { Length, IsEmail, IsDate, IsEnum } from 'class-validator';
import { Gender } from '../../enums/genders.enum';
import { Ref } from 'typegoose';

@InputType()
export class FindUserInput implements Partial<User> {
  @Field(() => ID, { nullable: true })
  id: Ref<User>;

  @Length(2, 255)
  @Field({ nullable: true })
  firstName: string;

  @Length(2, 255)
  @Field({ nullable: true })
  lastName: string;

  @Length(2, 255)
  @Field({ nullable: true })
  displayName: string;

  @IsEmail()
  @Field({ nullable: true })
  email: string;

  @IsDate()
  @Field(() => Date, { nullable: true })
  DOB?: Date;

  @IsEnum(Gender)
  @Field(() => Gender, { nullable: true })
  gender?: Gender;
}
