import bcrypt from 'bcrypt';
import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.CRYPT_SECRET!);

export async function hashPassword(password: string) {
    const bcryptSalt = await bcrypt.genSalt();

    return await bcrypt.hash(password, bcryptSalt);
}

export async function checkPassword(password: string, hashPassword: string) {
    return await bcrypt.compare(password, hashPassword);
}

export async function encrypt(data: string) {
    return cryptr.encrypt(data);
}

export function decrypt(data: string) {
    return cryptr.decrypt(data);
}