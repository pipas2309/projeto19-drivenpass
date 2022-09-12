import { NextFunction, Request, Response } from "express";
import { stripHtml } from "string-strip-html";

async function stripData(req: Request, res: Response, next: NextFunction) {
    const inputData = req.body;
    const aux = {...inputData};

    for(let prop in inputData) {
        if(typeof aux[prop] === 'string') {
            aux[prop] = (stripHtml(aux[prop]).result).trim()
        }
    }

    res.locals.inputData = aux;

    next();
}

export default stripData;