import { Document } from "@prisma/client";

export interface IDocument extends Omit<Document, "createdAt"> {
    createdAt?: Date
};

export interface IDocumentSimple extends Omit<Document, "createdAt" | "id" | "userId"> {};