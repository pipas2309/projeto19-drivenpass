import { SafeNote } from "@prisma/client";

export interface INote extends Omit<SafeNote, "createdAt"> {};

export interface INoteNoUserId extends Omit<INote, "userId"> {};