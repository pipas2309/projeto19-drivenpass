import { prisma } from "../config/database";

import { IDocumentSimple } from "../interfaces/document.interface";

export async function insert(document: IDocumentSimple, userId: number, encryptValidaty: string, encryptIssueDate: string) {
    return await prisma.document.create({
        data: { ...document, userId, validity: encryptValidaty, issueDate: encryptIssueDate }
    });
}

export async function findAll(userId: number) {
    return await prisma.document.findMany({
        where: { 
            userId
        },
        orderBy: {
            id: 'asc'
        }
    });
}

export async function findById(id: number) {
    return await prisma.document.findUnique({
        where: {
            id
        }
    });
}

export async function deleteDocument(id: number) {
    return await prisma.document.delete({
        where: {
            id
        }
    });
}