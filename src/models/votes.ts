import { Ref } from 'typegoose';
import { User } from './user.model';
import { ObjectType, Field } from 'type-graphql';
@ObjectType()
export class Vote {
    @Field(() => User)
    from: Ref<User>;
}