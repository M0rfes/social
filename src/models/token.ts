import { ObjectType, Field } from "type-graphql";
import { Typegoose, prop } from "typegoose";
@ObjectType()
export class Token extends Typegoose {
  @Field()
  @prop()
  token: string;

  @prop({ default: new Date(), expires: 48 * 60 * 60, index: true })
  createdAt?: Date;
}

export const InvalidTokens = new Token().getModelForClass(Token, {
  schemaOptions: { collection: "invalidToken" },
});
