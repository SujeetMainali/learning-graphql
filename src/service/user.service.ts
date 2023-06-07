import { User } from "../entities/User.entity";
import { AppDataSource } from "../config/database.config";
import { UserInput } from "../validator/user.validator";
import { UserAccountDetails } from "../entities/userAccount.entity";

class UserServce {
  constructor(
    private readonly userRepository = AppDataSource.getRepository(User)
  ) {}

  async createUser(data: UserInput, userAccountdetail: UserAccountDetails[]) {
    // const {userAccountDetails, ...restData} = data;
    const user = this.userRepository.create({
      name: data.name,
      age: data.age,
      userAccountDetails: userAccountdetail,
    });
    return await user.save();
  }

  async get() {
    return await this.userRepository.find({
      relations: {
        userAccountDetails: true,
      },
    });
  }

  async getById(id: string) {
    const user = this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        userAccountDetails: true,
      },
    });
    return user
  }
}

export default new UserServce();
