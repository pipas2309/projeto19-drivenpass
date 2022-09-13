import { signin, signup } from "./auth.schema";
import { registerCredential } from "./credential.schema"
import { registerNote } from "./note.schema"
import { registerCard } from "./card.schema"


const schemas = {
    signin,
    signup,
    registerCredential,
    registerNote,
    registerCard
};

export default schemas;