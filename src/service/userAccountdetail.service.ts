import { UserAccuntDetailsInput } from "../validator/user.validator";
import { AppDataSource } from "../config/database.config";
import { UserAccountDetails } from "../entities/userAccount.entity";
import { User } from "../entities/User.entity";

class UserAccountDetailsService {
  constructor(
    private readonly userDetailsRepository = AppDataSource.getRepository(
      UserAccountDetails
    )
  ) {}

  async createUserAccountDetails(data: UserAccuntDetailsInput) {
    const userAccountDetails = new UserAccountDetails();
    userAccountDetails.accountNumber = data.accountNumber;
    userAccountDetails.balance = data.balance;
    userAccountDetails.isActive = data.isActive;
    return await this.userDetailsRepository.save(userAccountDetails);
  }
}

export default new UserAccountDetailsService();
