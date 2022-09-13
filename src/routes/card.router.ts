import { Router } from "express";

import { createCard, deleteCard, getAllCards, specificCard } from "../controllers/card.controller";

import schemaValidator from "../middlewares/schemaValidator.middleware";
import tokenValidator from "../middlewares/tokenValidator.middleware";


const router = Router();


router.post("/card/register", tokenValidator, schemaValidator('registerCard'), createCard);
router.get("/cards", tokenValidator, getAllCards,);

router
        .route("/card/:id")
        .get(tokenValidator, specificCard)
        .delete(tokenValidator, deleteCard);


export default router;