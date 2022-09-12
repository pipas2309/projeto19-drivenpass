import { User } from "@prisma/client";

export interface ISignIn extends Omit<User, "id" | "createdAt" | "name"> {};

export interface ISignUp extends Omit<User, "id" | "createdAt"> {};