import { Router } from "express";

import { createCredential, deleteCredential, getAllCredentials, specificCredentials } from "../controllers/credential.controller";

import schemaValidator from "../middlewares/schemaValidator.middleware";
import tokenValidator from "../middlewares/tokenValidator.middleware";


const router = Router();


router.post("/credential/register", tokenValidator, schemaValidator('registerCredential'), createCredential);
router.get("/credential/", tokenValidator, getAllCredentials,);

router
        .route("/credential/:id")
        .get(tokenValidator, specificCredentials)
        .delete(tokenValidator, deleteCredential);


export default router;