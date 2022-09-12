import { Router } from "express";

import authRouter from './auth.router'


const router = Router();


router.use(authRouter);


export default router;