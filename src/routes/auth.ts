import { Router } from "express";

import AuthController from "../controllers/auth";

const router = Router();

const authRoutes = [router.post("/authenticate", AuthController.authenticate)];

export default authRoutes;