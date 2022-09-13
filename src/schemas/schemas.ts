import { signin, signup } from "./auth.schema";
import { registerCredential } from "./credential.schema"
import { registerNote } from "./note.schema"
import { registerCard } from "./card.schema"
import { registerWifi } from "./wifi.schema"


const schemas = {
    signin,
    signup,
    registerCredential,
    registerNote,
    registerCard,
    registerWifi
};

export default schemas;