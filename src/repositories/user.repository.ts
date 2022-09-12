import { prisma } from "../config/database";


export async function findByEmail(email: string) {
    return await prisma.user.findUnique({
        where: { 
            email
        }
    });
}

export async function insert(name: string, email: string, password: string) {
    await prisma.user.create({
        data: {name, email, password}
    })
}