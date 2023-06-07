import { query } from "express";
import userService from "../service/user.service";
import { UserSchema } from "../schema/user.schema";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { UserAccuntDetailsInput, UserInput } from "../validator/user.validator";
import userAccountdetailService from "../service/userAccountdetail.service";
import { User } from "../entities/User.entity";
import { UserAccountDetails } from "../entities/userAccount.entity";

@Resolver()
export class UserResolver {
  // constructor(private readonly userService: userService) {}
  @Mutation(() => UserSchema)
  async createUser(@Arg("data") data: UserInput) {
    let userAccountDetails;
    if (data.userAccountDetails) {
      userAccountDetails = await Promise.all(
        data.userAccountDetails.map(async (details) => {
          return await userAccountdetailService.createUserAccountDetails(
            details
          );
        })
      );
      const user = await userService.createUser(data, userAccountDetails);
      return user;
    }
  }

  @Query(() => [UserSchema], { description: "get all users" })
  async getAllUsers(@Arg("args") args: UserInput) {
    return await userService.get();
  }

  @Query(() => UserSchema)
  async getUserById(@Arg("id") id: string){
    return await userService.getById(id);
  }
}
