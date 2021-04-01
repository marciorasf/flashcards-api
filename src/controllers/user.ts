import { Request, Response } from "express";

import errorService from "@services/error";
import responseService from "@services/response";
import userService from "@services/user";

const userController = {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const user = await userService.create({
        email,
        password,
      });

      return responseService.created(response, { userId: user.id });
    } catch (err) {
      errorService.handle(err);

      return responseService.badRequest(response, {
        message: err.code === "23505" ? "email_in_use" : "error",
      });
    }
  },

  async updatePassword(request: Request, response: Response) {
    const { newPassword } = request.body;
    const { user } = response.locals;

    try {
      await userService.updatePassword(user.id, newPassword);
      return responseService.noContent(response);
    } catch (err) {
      return responseService.badRequest(response, { message: "password_not_updated" });
    }
  },
};

export default userController;
