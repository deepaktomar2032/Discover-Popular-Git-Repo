import { Request, Response } from "express";
import { RequestValidator } from "../validator/request.validator";
import { statusCode } from "../utils/statusCode";

/**
 * Validator as middleware function to validate minimum required query params
 * @param req - The request object
 * @param res - The response object
 * @param next - The next function
 * @returns - Status 400, if request params are not valid, calls next function if request is valid
 */
export const queryValidator = (req: Request, res: Response, next: Function) => {
    const { error } = RequestValidator.validate(req.query);
    if (error) return res.status(statusCode.bad_request).send({ successful: false, error_message: error.message });

    next();
};
