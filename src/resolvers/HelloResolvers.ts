@Mutation(() => Boolean)
async createUser(@Arg("values", () => UserInput) values: UserInput) {
  const { userAccount, ...userData } = values;

  const user = await User.create(userData).save();

  const userAccountData = {
    ...userAccount,
    user: user,
  };

  await UserAccount.create(userAccountData).save();

  return true;
}
