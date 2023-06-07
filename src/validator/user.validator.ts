import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
} from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UserAccuntDetailsInput {
  @Field(() => String)
  @IsString()
  accountNumber: string;

  @Field(() => Boolean)
  @IsBoolean()
  isActive: boolean;

  @Field(() => Int)
  @IsNumber()
  balance: number;
}

@InputType()
export class UserInput {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Int)
  @IsNumber()
  age: number;

  @Field(() => [UserAccuntDetailsInput], { nullable: true })
  @IsArray()
  @ValidateNested()
  @Type(() => UserAccuntDetailsInput)
  userAccountDetails: UserAccuntDetailsInput[];
}
