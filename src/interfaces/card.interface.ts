import { Card } from "@prisma/client";

export interface ICard extends Omit<Card, "createdAt"> {
    createdAt?: Date
};

export interface ICardNoUserId extends Omit<Card, "createdAt" | "id" | "userId"> {};