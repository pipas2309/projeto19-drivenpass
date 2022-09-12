import { Request, Response, NextFunction } from "express";
import { CustomError } from "../models/customError.model";

export function errorHandler(error: TypeError | CustomError, _req: Request, res: Response, _next: NextFunction) {
    console.log('\n Erro na API - Pego pelo "errorHandler"\n\nO Erro foi:\n' + error.message);

    let customError = error;

    if(!(error instanceof CustomError)) {
        customError = new CustomError(
            'Vixe, ai que vergonha... Parece que algo misterioso deu errado e nenhum dos Devs previu isso... Elem não tem medo do RH!'
        );
    }
    
    res.status((customError as CustomError).status).send(customError);
}

//Usage: throw new CustomError('Nada foi encontrado!', 404, 'Ou foram duendes ou você vai ter que fazer melhor');