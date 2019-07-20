import { Media } from './../enums/media.enum';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class MediaModel {
    @Field(() => Media)
    type: Media;

    @Field()
    url: string;
}