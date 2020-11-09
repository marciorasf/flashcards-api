import { Request, Response } from "express";

import { UserAuth } from "../interfaces/AuthInterface";
import AuthService from "../services/AuthService";
import ErrorService from "../services/ErrorService";
import MailService from "../services/MailService";
import UserService from "../services/UserService";

class AuthenticationController {
  public async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const payload: UserAuth = { email, password };

    try {
      const { user, token } = await AuthService.authenticate(payload);

      return response.status(200).json({ user, token });
    } catch (error) {
      ErrorService.handleError(error);

      return response.status(400).json({
        message: error.message,
      });
    }
  }

  public async recoverPassword(request: Request, response: Response) {
    const email = request.query.email as string;

    try {
      const user = await UserService.getByEmail(email);

      if (!user) {
        return response.status(404).json({ message: "USER_NOT_FOUND" });
      }

      const token = AuthService.generateRecoverPasswordToken();

      AuthService.createUserToken({
        token,
        expiresIn: new Date(Date.now() + 3600000), // 1 hour
        user: {
          connect: {
            id: user.id,
          },
        },
      });

      await MailService.sendRecoverPasswordEmail(email, token);

      return response.status(204).json({ message: "EMAIL_SENT" });
    } catch (error) {
      ErrorService.handleError(error);

      return response.status(400).json({ message: "INTERNAL_ERROR" });
    }
  }
}

export default new AuthenticationController();
