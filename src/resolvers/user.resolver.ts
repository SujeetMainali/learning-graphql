import { User } from "../entities/User.entity";
import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class UserInput{
    @Field()
    name: string

    @Field(()=>Int)
    age: number
}

@InputType()
class UserUpdateInput {
  @Field(()=>String,{ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  age?: number;
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

  @Mutation(()=>Boolean)
  async updateUser(
    @Arg("id", ()=>Int) id: number,
    @Arg('updatedUser',()=>UserUpdateInput) updatedUser: UserUpdateInput
  ){

    await User.update({id}, updatedUser)
    return true
  }

  @Mutation(()=>Boolean)
  async deleteUser(
    @Arg('id',()=> Int) id: number
  ){
    await User.delete(id)
    return true
  }

  @Query(()=>[User])
  users(){
    return User.find()
  }
}
