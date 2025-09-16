import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getRole } from "../controllers/role.controller.js";
const roleRouter = Router();

roleRouter.get("/", authorize, getRole);

export default roleRouter;