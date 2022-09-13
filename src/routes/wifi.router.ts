import { Router } from "express";

import { createWifi, deleteWifi, getAllWifis, specificWifi } from "../controllers/wifi.controller";

import schemaValidator from "../middlewares/schemaValidator.middleware";
import tokenValidator from "../middlewares/tokenValidator.middleware";


const router = Router();


router.post("/wifi/register", tokenValidator, schemaValidator('registerWifi'), createWifi);
router.get("/wifis", tokenValidator, getAllWifis,);

router
        .route("/wifi/:id")
        .get(tokenValidator, specificWifi)
        .delete(tokenValidator, deleteWifi);


export default router;