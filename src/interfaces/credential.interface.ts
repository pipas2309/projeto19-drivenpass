import { Credential } from "@prisma/client";

export interface ICredential extends Omit<Credential, "id" | "createdAt"> {};

export interface ICredentialNoUserId extends Omit<ICredential, "userId"> {};