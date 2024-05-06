import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { message } from "../utils/locale";
import { LogErrorMessage } from "../utils/error-handler";
import { MarkFavourite } from "./../helper/MarkFavourite";

/**
 * Save the given id in favourite list
 * @param req - The request object
 * @param res - The response object
 * @returns - Status code & message
 */
export const markFavouriteRepo = (req: Request, res: Response) => {
    try {
        const markFavourite = MarkFavourite.getInstance();
        markFavourite.save(parseInt(req.params.id));
        return res.status(statusCode.successful_request).send({ successful: true, Message: message.Marked_Favourite_successfully });
    } catch (error: unknown) {
        console.log(LogErrorMessage(error));
        return res.status(statusCode.internal_server_error).send({ successful: false, Message: message.Something_went_wrong });
    }
};

/**
 * Delete the given id from favourite list
 * @param req - The request object
 * @param res - The response object
 * @returns - Status code & message
 */
export const unMarkFavouriteRepo = (req: Request, res: Response) => {
    try {
        const markFavourite = MarkFavourite.getInstance();
        markFavourite.delete(parseInt(req.params.id));
        return res.status(statusCode.successful_request).send({ successful: true, Message: message.UnMarked_Favourite_successfully });
    } catch (error: unknown) {
        console.log(LogErrorMessage(error));
        return res.status(statusCode.internal_server_error).send({ successful: false, Message: message.Something_went_wrong });
    }
};

/**
 * Fetch a list of favourite Repo
 * @param req - The request object
 * @param res - The response object
 * @returns - Array of favourite Repo
 */
export const fetchFavouriteRepo = (req: Request, res: Response) => {
    try {
        const markFavourite = MarkFavourite.getInstance();
        const favouriteRepoList = Array.from(markFavourite.fetch());

        return res.status(statusCode.successful_request).send({ successful: true, Message: message.Fetched_Favourite_successfully, favouriteRepoList });
    } catch (error: unknown) {
        console.log(LogErrorMessage(error));
        return res.status(statusCode.internal_server_error).send({ successful: false, Message: message.Something_went_wrong });
    }
};