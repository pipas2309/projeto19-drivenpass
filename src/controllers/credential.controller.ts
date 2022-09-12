import { Request, Response } from 'express';

import { ICredential, ICredentialNoUserId } from '../interfaces/credential.interface';

import * as credentialService from '../services/credential.service';


export async function createCredential(req: Request, res: Response) {
    const { url, title, login, password }: ICredentialNoUserId = req.body;

    const { userId } = res.locals;

    await credentialService.newCredential(url, title, login, password, userId.userId);

    res.sendStatus(202);
}

export async function getAllCredentials(req: Request, res: Response) {
    const { userId } = res.locals;

    const credentials = await credentialService.allCredential(userId.userId);

    res.status(200).send(credentials);
}

export async function specificCredentials(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    const credential = await credentialService.getCredentialById(parseInt(id), userId.userId);

    res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    await credentialService.deleteCredential(parseInt(id), userId.userId);

    res.sendStatus(202);
}