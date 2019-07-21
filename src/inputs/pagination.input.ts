import { InputType, Field, Int } from 'type-graphql';
import { Sort } from '../enums/sort.enum';

@InputType()
export class PaginationInput {
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  skip: number;

  @Field(() => Int, { nullable: true })
  limit: number;

  @Field(() => Sort, { defaultValue: Sort.asc })
  createAt: Sort = Sort.asc;
}
