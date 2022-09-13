import { SafeNote } from "@prisma/client";

export interface INote extends Omit<SafeNote, "createdAt"> {};

export interface INoteNoId extends Omit<INote, "id"> {};

export interface INoteNoUserId extends Omit<INote, "userId"> {};