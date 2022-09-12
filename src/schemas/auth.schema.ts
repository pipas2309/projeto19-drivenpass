import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const JoiPassword = Joi.extend(joiPasswordExtendCore);

export const signup = Joi.object({
    name: Joi.string().min(3).max(128),
    email: Joi.string().trim().email().required(),
    password: JoiPassword
        .string()
        .min(10)
        .max(32)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .messages({
            'password.minOfUppercase': '{#label} precisa ter ao menos {#min} letra(s) maiúscula(s)',
            'password.minOfSpecialCharacters':
                  '{#label} precisa ter ao menos {#min} caracter(es) especial(s)',
            'password.minOfLowercase': '{#label} precisa ter ao menos {#min} letra(s) minúscula(s)',
            'password.minOfNumeric': '{#label} precisa ter ao menos {#min} número(s)',
            'password.noWhiteSpaces': '{#label} não deve conter espaços',
            'password.min': '{#label} precisa ter ao menos {#min} caracteres',
            'password.max': '{#label} precisa ter no máximo {#max} caracteres',
      })
        .required()
});

export const signin = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(10).max(32).required()
});
