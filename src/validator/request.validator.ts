import { Joi } from "express-validation";

export const RequestValidator = Joi.object({
    createdFrom: Joi.string().required().regex(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),
    language: Joi.string(),
    limit: Joi.number(),
});

export const IdValidator = Joi.object({
    id: Joi.number().required()
});