import { ObjectType, Field } from 'type-graphql';
import { Typegoose, prop } from 'typegoose';
@ObjectType()
export class Token extends Typegoose {
  @Field()
  token: string;

  @prop({ expires: '48hr' })
  int: string;
}

export const InvalidTokens = new Token().getModelForClass(Token, {
  schemaOptions: { collection: 'invalidToken' },
});
