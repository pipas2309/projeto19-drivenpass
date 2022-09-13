import { prisma } from "../config/database";

import { ICardNoUserId } from "../interfaces/card.interface";

export async function findByUserIdAndTitle(userId: number, title: string) {
    return await prisma.card.findUnique({
        where: { 
            userId_title: {
                userId,
                title
            }
        }
    });
}

export async function insert(card: ICardNoUserId, userId: number, encryptPassword: string, encryptCVV: string) {
    return await prisma.card.create({
        data: { ...card, userId, CardPassword: encryptPassword, CardCVV: encryptCVV }
    });
}

export async function findAll(userId: number) {
    return await prisma.card.findMany({
        where: { 
            userId
        }
    });
}

export async function findById(id: number) {
    return await prisma.card.findUnique({
        where: {
            id
        }
    });
}

export async function deleteCard(id: number) {
    return await prisma.card.delete({
        where: {
            id
        }
    });
}