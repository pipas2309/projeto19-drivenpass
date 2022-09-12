import { prisma } from "../config/database";

export async function findByUserIdAndTitle(userId: number, title: string) {
    return await prisma.credential.findUnique({
        where: { 
            userId_title: {
                userId,
                title
            }
        }
    });
}

export async function insert(url: string, title: string, login: string, password: string, userId: number) {
    return await prisma.credential.create({
        data: { url, title, login, password, userId }
    });
}

export async function findAll(userId: number) {
    return await prisma.credential.findMany({
        where: { 
            userId
        }
    });
}

export async function findById(id: number) {
    return await prisma.credential.findUnique({
        where: {
            id
        }
    });
}

export async function deleteCredential(id: number) {
    return await prisma.credential.delete({
        where: {
            id
        }
    });
}