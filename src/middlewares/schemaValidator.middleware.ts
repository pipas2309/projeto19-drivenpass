import { NextFunction, Request, Response } from "express";

import schemas from "../schemas/schemas";
import { CustomError } from "../models/customError.model";

type SchemasTypes = keyof typeof schemas;

function schemaValidator(whichSchema: SchemasTypes) {

    return (req: Request, _res: Response, next: NextFunction) => {

        const { error } = schemas[whichSchema].validate(req.body, { abortEarly: false });

        if(error) {
            const errorMessage = error.details.map((detail: {message: string}) => detail.message);
            throw new CustomError(
                `Entidade ('${whichSchema}') não processável!`, 
                422, 
                `Nossa bola de cristal quebrou, você precisa se esforçar mais na requisição do(s) 
                ${errorMessage})}!`
                );
        }

        return next();
    }
}

export default schemaValidator;