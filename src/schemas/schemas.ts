import { signin, signup } from "./auth.schema";
import { registerCredential } from "./credential.schema"
import { registerNote } from "./note.schema"


const schemas = {
    signin,
    signup,
    registerCredential,
    registerNote
};

export default schemas;