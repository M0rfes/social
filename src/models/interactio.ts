import { Vote } from './votes';
import { ObjectType, Field, Int, Root } from 'type-graphql';
@ObjectType()
export class Interactions {
    @Field(() => [Vote])
    upVote: Vote[];

    @Field(() => [Vote])
    downVote: Vote[];

    @Field(() => Int)
    totalUpVotes(@Root() { _doc }: any) {
        console.log(_doc);
        return 0;
    }
    @Field(() => Int)
    totalDownVotes(@Root() { _doc }: any) {
        console.log(_doc);
        return 0;
    }

}