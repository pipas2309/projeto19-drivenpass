import Joi from 'joi';

export const registerWifi = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    wifi: Joi.string().min(1).required(),
    password: Joi.string().min(1).required()
});
