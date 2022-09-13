import { Router } from "express";

import { createNote, deleteNote, getAllNotes, specificNote } from "../controllers/note.controller";

import schemaValidator from "../middlewares/schemaValidator.middleware";
import tokenValidator from "../middlewares/tokenValidator.middleware";


const router = Router();


router.post("/safenote/register", tokenValidator, schemaValidator('registerNote'), createNote);
router.get("/safenotes", tokenValidator, getAllNotes,);

router
        .route("/safenote/:id")
        .get(tokenValidator, specificNote)
        .delete(tokenValidator, deleteNote);


export default router;