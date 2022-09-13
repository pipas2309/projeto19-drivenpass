import { Request, Response } from 'express';

import { IDocumentSimple } from '../interfaces/document.interface';

import * as documentService from '../services/document.service';


export async function createDocument(req: Request, res: Response) {
    const document: IDocumentSimple = req.body;

    const { userId } = res.locals;

    await documentService.newDocument(document, userId.userId);

    res.sendStatus(202);
}

export async function getAllDocuments(_req: Request, res: Response) {
    const { userId } = res.locals;

    const documents = await documentService.allDocuments(userId.userId);

    res.status(200).send(documents);
}

export async function specificDocument(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    const document = await documentService.getDocumentById(parseInt(id), userId.userId);

    res.status(200).send(document);
}

export async function deleteDocument(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    await documentService.deleteDocument(parseInt(id), userId.userId);

    res.sendStatus(202);
}