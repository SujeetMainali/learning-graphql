import { User } from "../entities/User.entity";
import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class UserInput{
    @Field()
    name: string

    @Field(()=>Int)
    age: number
}


@Resolver()
export class UserResolver {
  //mutation takes return value
  @Mutation(() => Boolean)
  //we pass arguments in the function of mutation
  async createUser(
    @Arg("values", () => UserInput) values: UserInput,
  ) {
    await User.insert(values)
    return true;
  }

  @Query(()=>[User])
  users(){
    return User.find()
  }
}
