import { Media } from './../../enums/media.enum';
import { InputType, Field } from 'type-graphql';
import { MediaModel } from 'src/models/media.model';
import { IsUrl } from 'class-validator';


@InputType()
export class MediaInput implements Partial<MediaModel> {
    @Field(() => Media)
   type: Media;

    @IsUrl()
    @Field()
    url: string;
}