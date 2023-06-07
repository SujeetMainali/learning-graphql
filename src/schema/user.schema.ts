import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class UserAccountDetailsSchema {
  @Field(() => String, { nullable: true })
  accountNumber: string;

  @Field(() => Boolean,{nullable:true})
  isActive: boolean;

  @Field(() => Int,{nullable:true})
  balance: number;
}

@ObjectType()
export class UserSchema {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  age: number;

  @Field(() => UserAccountDetailsSchema, { nullable: true })
  userAccountDetails: UserAccountDetailsSchema[];
}
