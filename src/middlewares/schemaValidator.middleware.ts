import { NextFunction, Request, Response } from "express";

import schemas from "../schemas/schemas";
import { CustomError } from "../models/customError.model";

type SchemasTypes = keyof typeof schemas;

function schemaValidator(whichSchema: SchemasTypes) {

    return (_req: Request, res: Response, next: NextFunction) => {

        const { error } = schemas[whichSchema].validate(res.locals.inputData, { abortEarly: false });

        if(error) {
            const errorMessage = error.details.map((detail: {message: string}) => detail.message);
            throw new CustomError(
                `Entidade não processável ('${whichSchema}')!`, 
                422, 
                `Nossa bola de cristal quebrou, você precisa se esforçar mais na requisição do(s)\n 
                ${errorMessage})}!`
                );
        }

        return next();
    }
}

export default schemaValidator;