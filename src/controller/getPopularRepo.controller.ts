import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { message } from "../utils/locale";

/**
 * Process any request that hits api end-point /api/popular-repo & respond back
 * @param req - The request object
 * @param res - The response object
 * @returns - Response
 */
export const getPopularRepo = async (req: Request, res: Response) => {
    try {
        return res.status(statusCode.successful_request).send({ successful: true, Message: message.Fetched_successfully });
    } catch (error) {
        return res.status(statusCode.internal_server_error).send({ successful: false, Message: message.Something_went_wrong });
    }
};
