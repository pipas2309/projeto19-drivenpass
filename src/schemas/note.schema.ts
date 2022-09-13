import Joi from 'joi';

export const registerNote = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    text: Joi.string().max(1000).required(),
});
