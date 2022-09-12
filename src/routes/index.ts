import { Router } from "express";

import authRouter from './auth.router'
import credentialRouter from './credentials.router';

const router = Router();


router.use(authRouter);
router.use(credentialRouter)

export default router;