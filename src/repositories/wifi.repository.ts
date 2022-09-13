import { prisma } from "../config/database";

import { IWifiSimple } from "../interfaces/wifi.interface";

export async function insert(wifi: IWifiSimple, userId: number, encryptPassword: string) {
    return await prisma.wifi.create({
        data: { ...wifi, userId, password: encryptPassword }
    });
}

export async function findAll(userId: number) {
    return await prisma.wifi.findMany({
        where: { 
            userId
        },
        orderBy: {
            id: 'asc'
        }
    });
}

export async function findById(id: number) {
    return await prisma.wifi.findUnique({
        where: {
            id
        }
    });
}

export async function deleteWifi(id: number) {
    return await prisma.wifi.delete({
        where: {
            id
        }
    });
}