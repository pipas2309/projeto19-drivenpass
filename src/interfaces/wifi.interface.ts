import { Wifi } from "@prisma/client";

export interface IWifi extends Omit<Wifi, "createdAt"> {
    createdAt?: Date
};

export interface IWifiSimple extends Omit<Wifi, "createdAt" | "id" | "userId"> {};