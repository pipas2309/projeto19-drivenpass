import bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
    const bcryptSalt = await bcrypt.genSalt();

    return await bcrypt.hash(password, bcryptSalt);
}