
import * as credentialRepository from '../repositories/credential.repository';

import { CustomError } from '../models/customError.model';

import { decrypt, encrypt } from '../utils/encrypt.util';


export async function newCredential(url: string, title: string, login: string, password: string, userId: number) {
    const duplicateTitle = await credentialRepository.findByUserIdAndTitle(userId, title);

    if(duplicateTitle) {
        throw new CustomError(
            `Título Duplicado`, 
            409, 
            `Imagina achar o Sr. Meeseeks se todos tem o mesmo nome...`
            );
    }

    const encryptPassword = await encrypt(password);

    await credentialRepository.insert(url, title, login, encryptPassword, userId);
}

export async function allCredential(userId: number) {
    const credentials = await credentialRepository.findAll(userId);

    return credentials.map( (credential) => {
        return {
            id: credential.id,
            url: credential.url,
            title: credential.title,
            login: credential.login,
            password: decrypt(credential.password),
        }
    })
}

export async function getCredentialById(id: number, userId: number) {
    const credential = await credentialRepository.findById(id);

    if(!credential) {
        throw new CustomError(
            `Credencial não existe!`, 
            404, 
            `A senha da lampada mágica, você conhece o site?`
            );
    }

    if(credential?.userId !== userId) {
        throw new CustomError(
            `Credencial não pertence ao usuário!`, 
            406, 
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
            );
    }

    const decryptPassword = decrypt(credential.password);

    return { ...credential, password: decryptPassword }
}

export async function deleteCredential(id: number, userId: number) {
    const credential = await credentialRepository.findById(id);

    if(!credential) {
        throw new CustomError(
            `Credencial não existe!`, 
            404, 
            `A senha da lampada mágica, você conhece o site?`
            );
    }

    if(credential?.userId !== userId) {
        throw new CustomError(
            `Credencial não pertence ao usuário!`, 
            406, 
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
            );
    }

    await credentialRepository.deleteCredential(id);
}