import { Request, Response } from 'express';
import { ISignIn, ISignUp } from '../interfaces/user.interface';
import * as userService from '../services/user.service';

export async function signIn(req: Request, res: Response) {
    const { email, password }: ISignIn = req.body;

    const response = await userService.login(email.toLocaleLowerCase(), password);

    res.status(202).send(response);
}

export async function signUp(req: Request, res: Response) {
    const { name, email, password }: ISignUp = req.body;

    await userService.createNewUser(name, email.toLocaleLowerCase(), password);

    res.sendStatus(201);
}