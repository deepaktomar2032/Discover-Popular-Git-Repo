import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { message } from "../utils/locale";
import { LogErrorMessage } from "./../utils/error-handler";
import { fetchRepo, getQueryURL } from "../helper/helperFunction";
import { IQueryParams } from "../Interface/IQueryParams";
import { IResponse } from "../Interface/IResponse";

/**
 * Process any request that hits api end-point /api/popular-repo & respond back
 * @param req - The request object
 * @param res - The response object
 * @returns - Response
 */
export const getPopularRepo = async (req: Request, res: Response) => {
    const requestQuery = { sort: "stars", order: "desc", ...req.query } as IQueryParams;

    try {
        const queryURL = getQueryURL(requestQuery) as string;
        const response = (await fetchRepo(queryURL)) as IResponse;

        return res.status(statusCode.successful_request).send({ successful: true, Message: message.Fetched_successfully, response });
    } catch (error: unknown) {
        console.log(LogErrorMessage(error));
        return res.status(statusCode.internal_server_error).send({ successful: false, Message: message.Something_went_wrong });
    }
};
