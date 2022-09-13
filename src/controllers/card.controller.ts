import { Request, Response } from 'express';

import { ICardNoUserId } from '../interfaces/card.interface';

import * as cardService from '../services/card.service';


export async function createCard(req: Request, res: Response) {
    const card: ICardNoUserId = req.body;

    const { userId } = res.locals;

    await cardService.newCard(card, userId.userId);

    res.sendStatus(202);
}

export async function getAllCards(_req: Request, res: Response) {
    const { userId } = res.locals;

    const cards = await cardService.allCards(userId.userId);

    res.status(200).send(cards);
}

export async function specificCard(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    const card = await cardService.getCardById(parseInt(id), userId.userId);

    res.status(200).send(card);
}

export async function deleteCard(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    await cardService.deleteCard(parseInt(id), userId.userId);

    res.sendStatus(202);
}