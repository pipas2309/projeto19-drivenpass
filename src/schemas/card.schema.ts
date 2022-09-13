import Joi from 'joi';

export const registerCard = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    cardNumber: Joi.string().min(1).required(),
    cardName: Joi.string().min(1).required(),
    CardCVV: Joi.string().min(1).required(),
    CardExpiration: Joi.string().min(4).max(7).required(),
    CardPassword: Joi.string().min(4).max(6).required(),
    isVirtual: Joi.boolean().strict().required(),
    type: Joi.string().valid('credit', 'debit', 'both').required()
});
