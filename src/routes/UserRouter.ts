import { Router } from "express";
import UserController from '../app/controllers/UserController';

class UserRouter {
  router = Router();
  protected userController = new UserController();
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes(): void {
    this.router.route("/").get((req, res) => {
      res.json("Hello World")
    });
    this.router.route("/sign-up").post(this.userController.signUp);
    this.router.route("/sign-in").post(this.userController.signIn);
  }
}

export default new UserRouter().router;
