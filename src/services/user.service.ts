import { CustomError } from '../models/customError.model';

import * as userRepository from '../repositories/user.repository'

import { randonMemeName } from '../utils/genereteName.util';
import * as encryptUtil from '../utils/encrypt.util';

export async function createNewUser(name: string | null, email: string, password: string) {
    const registered = await userRepository.findByEmail(email);

    if(registered) {
        throw new CustomError(
            `Usuário já cadastrado`, 
            409, 
            `Se você quer esconder informações de você mesmo, vai precisar se esforçar... (ou criar um novo email :0)!`
            );
    }

    if(!name) name = randonMemeName();

    const hashPassword: string = await encryptUtil.hashPassword(password)

    await userRepository.insert(name, email, hashPassword);
}