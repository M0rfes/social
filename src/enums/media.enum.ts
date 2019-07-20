import { registerEnumType } from "type-graphql";

export enum Media {
    Image = 'Image'
}

registerEnumType(Media, {
    name: 'Media',// this one is mandatory
    description: 'The basic directions', // this one is optional
});
