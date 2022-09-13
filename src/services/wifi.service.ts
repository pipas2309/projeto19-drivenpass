import * as wifiRepository from '../repositories/wifi.repository';

import { CustomError } from '../models/customError.model';

import { decrypt, encrypt } from '../utils/encrypt.util';

import { Wifi } from '@prisma/client';
import { IWifi, IWifiSimple } from '../interfaces/wifi.interface';


export async function newWifi(wifi: IWifiSimple, userId: number) {
    const encryptPassword: string = await encrypt(wifi.password);

    await wifiRepository.insert(wifi, userId, encryptPassword);
}

export async function allWifis(userId: number): Promise<IWifi[]> {
    const wifis: Wifi[] = await wifiRepository.findAll(userId);

    return wifis.map((wifi: IWifi) => {
        delete wifi?.createdAt;
        return {
            ...wifi, password: decrypt(wifi.password)
        };
    });
}

export async function getWifiById(id: number, userId: number): Promise<Wifi> {
    const wifi = await checkWifi(id, userId)

    return { ...wifi, password: decrypt(wifi.password) }
}

export async function deleteWifi(id: number, userId: number) {
    await checkWifi(id, userId);

    await wifiRepository.deleteWifi(id);
}

async function checkWifi(id: number, userId: number) {
    const wifi = await wifiRepository.findById(id);

    if (!wifi) {
        throw new CustomError(
            `Rede Wi-Fi não existe!`,
            404,
            `Infelizmente não temos o papelzim com os números da mega...`
        );
    }

    if (wifi?.userId !== userId) {
        throw new CustomError(
            `Rede Wi-Fi não pertence ao usuário!`,
            406,
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
        );
    }
    return wifi;
}