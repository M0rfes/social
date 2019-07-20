import { InputType, Field, Int } from 'type-graphql';


@InputType()
export class PaginationInput {
    @Field(() => Int, { nullable: true, defaultValue: 0 })
    skip: number;

    @Field(() => Int, { nullable: true })
    limit: number;
}