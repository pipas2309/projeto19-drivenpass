
import * as noteRepository from '../repositories/note.repository';

import { CustomError } from '../models/customError.model';

import { decrypt, encrypt } from '../utils/encrypt.util';
import { INote, INoteNoId, INoteNoUserId } from '../interfaces/note.interface';


export async function newNote(title: string, text: string, userId: number) {
    const duplicateTitle = await noteRepository.findByUserIdAndTitle(userId, title);

    if(duplicateTitle) {
        throw new CustomError(
            `Título Duplicado`, 
            409, 
            `Imagina achar o Sr. Meeseeks se todos tem o mesmo nome...`
            );
    }

    const encryptText = await encrypt(text);

    await noteRepository.insert(title, encryptText, userId);
}

export async function allNotes(userId: number): Promise<INoteNoUserId[]> {
    const notes = await noteRepository.findAll(userId);

    return notes.map( (note) => {
        return {
            id: note.id,
            title: note.title,
            text: decrypt(note.text),
        }
    })
}

export async function getNoteById(id: number, userId: number) {
    const note = await noteRepository.findById(id);

    if(!note) {
        throw new CustomError(
            `Nota Segura não existe!`, 
            404, 
            `Infelizmente não temos o papelzim com os números da mega...`
            );
    }

    if(note?.userId !== userId) {
        throw new CustomError(
            `Nota Segura não pertence ao usuário!`, 
            406, 
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
            );
    }

    const decryptText = decrypt(note.text);

    return { ...note, text: decryptText }
}

export async function deleteNote(id: number, userId: number) {
    const note = await noteRepository.findById(id);

    if(!note) {
        throw new CustomError(
            `Nota Segura não existe!`, 
            404, 
            `Infelizmente não temos o papelzim com os números da mega...`
            );
    }

    if(note?.userId !== userId) {
        throw new CustomError(
            `Nota Segura não pertence ao usuário!`, 
            406, 
            `Então... tu mexe com tuas coisas e eu com as minhas... pode C? ò-ó`
            );
    }

    await noteRepository.deleteNote(id);
}