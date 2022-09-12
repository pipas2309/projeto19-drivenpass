import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

import { CustomError } from '../models/customError.model';

async function tokenValidator(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization?.startsWith('Bearer ')) {
        throw new CustomError(
            'Metodo de autorização inválido',
            405,
            'Para entrar na bat-caverna são 3 toques e uma cambalhota...'
        );
    }

    const token = authorization?.replace("Bearer ", "");

    if (!token) tokenError();

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (error, id) => {
        if(error) tokenError();

        res.locals.userId = id;
        next();
    })
}

export default tokenValidator;

function tokenError() {
    throw new CustomError(
        'Autorização inválida',
        401,
        'Parece que a api REALMENTE é criptografada, bizarro... parecia só marketing'
    );
}