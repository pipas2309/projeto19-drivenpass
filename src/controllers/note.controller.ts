import { Request, Response } from 'express';

import { INote, INoteNoUserId } from '../interfaces/note.interface';

import * as noteService from '../services/note.service';


export async function createNote(req: Request, res: Response) {
    const { title, text }: INote = req.body;

    const { userId } = res.locals;

    await noteService.newNote(title, text, userId.userId);

    res.sendStatus(202);
}

export async function getAllNotes(req: Request, res: Response) {
    const { userId } = res.locals;

    const notes = await noteService.allNotes(userId.userId);

    res.status(200).send(notes);
}

export async function specificNote(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    const note = await noteService.getNoteById(parseInt(id), userId.userId);

    res.status(200).send(note);
}

export async function deleteNote(req: Request, res: Response) {
    const { userId } = res.locals;
    const { id } = req.params;

    await noteService.deleteNote(parseInt(id), userId.userId);

    res.sendStatus(202);
}