import { Request, Response } from 'express';

import { IWifiSimple } from '../interfaces/wifi.interface';

import * as wifiService from '../services/wifi.service';


export async function createWifi(req: Request, res: Response) {
    const wifi: IWifiSimple = req.body;

    const { userId } = res.locals;

    await wifiService.newWifi(wifi, userId.userId);

    res.sendStatus(202);
}

export async function getAllWifis(_req: Request, res: Response) {
    const { userId } = res.locals;

    const wifis = await wifiService.allWifis(userId.userId);

    res.status(200).send(wifis);
}

export async function specificWifi(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    const wifi = await wifiService.getWifiById(parseInt(id), userId.userId);

    res.status(200).send(wifi);
}

export async function deleteWifi(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    await wifiService.deleteWifi(parseInt(id), userId.userId);

    res.sendStatus(202);
}