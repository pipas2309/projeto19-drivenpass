import Joi from 'joi';

export const registerDocument = Joi.object({
    fullname: Joi.string().min(1).required(),
    issueDate: Joi.string().min(6).max(10).required(),
    validity: Joi.string().min(4).max(10).required(),
    number: Joi.string().min(1).required(),
    issuingAgency: Joi.string().min(1).required(),
    type: Joi.string().valid('rg', 'cpf').required()
});
