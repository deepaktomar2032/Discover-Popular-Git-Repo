import { Request, Response } from "express";
import { IdValidator } from "../validator/request.validator";
import { statusCode } from "../utils/statusCode";

/**
 * ID Validator as middleware function to validate id param
 * @param req - The request object
 * @param res - The response object
 * @param next - The next function
 * @returns - Status 400, if id is not a number
 */
export const idValidator = (req: Request, res: Response, next: Function) => {
    const { error } = IdValidator.validate(req.params);
    if (error) return res.status(statusCode.bad_request).send({ successful: false, error_message: error.message });

    next();
};
