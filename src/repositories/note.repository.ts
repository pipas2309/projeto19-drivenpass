import { prisma } from "../config/database";

export async function findByUserIdAndTitle(userId: number, title: string) {
    return await prisma.safeNote.findUnique({
        where: { 
            userId_title: {
                userId,
                title
            }
        }
    });
}

export async function insert(title: string, text: string, userId: number) {
    return await prisma.safeNote.create({
        data: { title, text, userId }
    });
}

export async function findAll(userId: number) {
    return await prisma.safeNote.findMany({
        where: { 
            userId
        }
    });
}

export async function findById(id: number) {
    return await prisma.safeNote.findUnique({
        where: {
            id
        }
    });
}

export async function deleteNote(id: number) {
    return await prisma.safeNote.delete({
        where: {
            id
        }
    });
}