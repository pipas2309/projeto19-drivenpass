import * as documentRepository from '../repositories/document.repository';

import { CustomError } from '../models/customError.model';

import { decrypt, encrypt } from '../utils/encrypt.util';

import { Document } from '@prisma/client';
import { IDocument, IDocumentSimple } from '../interfaces/document.interface';


export async function newDocument(document: IDocumentSimple, userId: number) {
    const encryptValidaty: string = await encrypt(document.validity);
    const encryptIssueDate: string = await encrypt(document.issueDate);

    await documentRepository.insert(document, userId, encryptValidaty, encryptIssueDate);
}

export async function allDocuments(userId: number): Promise<IDocument[]> {
    const documents: Document[] = await documentRepository.findAll(userId);

    return documents.map((document: IDocument) => {
        delete document?.createdAt;
        return {
            ...document, validity: decrypt(document.validity), issueDate: decrypt(document.issueDate)
        };
    });
}

export async function getDocumentById(id: number, userId: number): Promise<Document> {
    const document = await checkDocument(id, userId)

    return { ...document, validity: decrypt(document.validity), issueDate: decrypt(document.issueDate) }
}

export async function deleteDocument(id: number, userId: number) {
    await checkDocument(id, userId);

    await documentRepository.deleteDocument(id);
}

async function checkDocument(id: number, userId: number) {
    const document = await documentRepository.findById(id);

    if (!document) {
        throw new CustomError(
            `Documento não existe!`,
            404,
            `Infelizmente não temos o papelzim com os números da mega...`
        );
    }

    if (document?.userId !== userId) {
        throw new CustomError(
            `Documento não pertence ao usuário!`,
            406,
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
        );
    }
    return document;
}