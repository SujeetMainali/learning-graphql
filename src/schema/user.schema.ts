import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
export class UserAccountDetailsSchema {
  @Field(() => String, { nullable: true })
  accountNumber: string;

  @Field(() => Boolean, { nullable: true })
  isActive: boolean;

  @Field(() => Float, { nullable: true })
  balance: number;
}

@ObjectType()
export class UserSchema {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Float, { nullable: true })
  age: number;

  @Field(() => UserAccountDetailsSchema, { nullable: true })
  userAccountDetails: UserAccountDetailsSchema;
}
