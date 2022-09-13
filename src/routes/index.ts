import { Router } from "express";

import authRouter from './auth.router';
import credentialRouter from './credentials.router';
import noteRouter from './notes.router';
import cardRouter from './card.router'

const router = Router();


router.use(authRouter);
router.use(credentialRouter);
router.use(noteRouter);
router.use(cardRouter);


export default router;