
import * as cardRepository from '../repositories/card.repository';

import { CustomError } from '../models/customError.model';

import { decrypt, encrypt } from '../utils/encrypt.util';
import { Card } from '@prisma/client';
import { ICard, ICardNoUserId } from '../interfaces/card.interface';


export async function newCard(card: ICardNoUserId, userId: number) {
    const duplicateTitle = await cardRepository.findByUserIdAndTitle(userId, card.title);

    if (duplicateTitle) {
        throw new CustomError(
            `Título Duplicado`,
            409,
            `Imagina achar o Sr. Meeseeks se todos tem o mesmo nome...`
        );
    }

    const encryptPassword: string = await encrypt(card.CardPassword);
    const encryptCVV: string = await encrypt(card.CardCVV);

    await cardRepository.insert(card, userId, encryptPassword, encryptCVV);
}

export async function allCards(userId: number): Promise<ICard[]> {
    const cards: Card[] = await cardRepository.findAll(userId);

    return cards.map((card: ICard) => {
        delete card?.createdAt
        return {
            ...card, CardCVV: decrypt(card.CardCVV), CardPassword: decrypt(card.CardPassword)
        }
    })
}

export async function getCardById(id: number, userId: number): Promise<Card> {
    const card = await cardRepository.findById(id);

    if (!card) {
        throw new CustomError(
            `Cartão não existe!`,
            404,
            `Infelizmente não temos o papelzim com os números da mega...`
        );
    }

    if (card?.userId !== userId) {
        throw new CustomError(
            `Cartão não pertence ao usuário!`,
            406,
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
        );
    }

    return { ...card, CardPassword: decrypt(card.CardPassword), CardCVV: decrypt(card.CardCVV) }
}

export async function deleteCard(id: number, userId: number) {
    const card = await cardRepository.findById(id);

    if (!card) {
        throw new CustomError(
            `Cartão não existe!`,
            404,
            `Infelizmente não temos o papelzim com os números da mega...`
        );
    }

    if (card?.userId !== userId) {
        throw new CustomError(
            `Cartão não pertence ao usuário!`,
            406,
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
        );
    }

    await cardRepository.deleteCard(id);
}