import { Router } from "express";

import { createDocument, deleteDocument, getAllDocuments, specificDocument } from "../controllers/document.controller";

import schemaValidator from "../middlewares/schemaValidator.middleware";
import tokenValidator from "../middlewares/tokenValidator.middleware";


const router = Router();


router.post("/document/register", tokenValidator, schemaValidator('registerDocument'), createDocument);
router.get("/documents", tokenValidator, getAllDocuments,);

router
        .route("/document/:id")
        .get(tokenValidator, specificDocument)
        .delete(tokenValidator, deleteDocument);


export default router;