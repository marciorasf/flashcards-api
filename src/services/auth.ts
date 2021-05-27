import bcrypt from "bcrypt";

import userService from "@services/user";
import generateToken from "@utils/generate-token";

type AuthData = {
  email: string;
  password: string;
};

const authService = {
  async authenticate({ email, password }: AuthData) {
    const user = await userService.retrieveOne({ email });

    if (!user) {
      throw new Error("user_not_found");
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      const sevenDaysInSeconds = 60 * 60 * 24 * 7;
      return {
        user: {
          id: user.id,
          email: user.email,
        },
        token: generateToken({ userId: user.id }, sevenDaysInSeconds),
      };
    }

    throw new Error("wrong_password");
  },
};

export default authService;
