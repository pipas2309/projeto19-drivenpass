import { Router } from "express";

import { signIn, signUp } from "../controllers/auth.controller";

import schemaValidator from "../middlewares/schemaValidator.middleware";

const router = Router();

router.post("/signin", schemaValidator('signin'), signIn);
router.get("/signup", schemaValidator('signup'), signUp);

export default router;