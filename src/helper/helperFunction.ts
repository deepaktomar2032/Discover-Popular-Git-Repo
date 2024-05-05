import axios from "axios";
import { LogErrorMessage } from "./../utils/error-handler";
import { UrlBuilder } from "./UrlBuilder";
import { IResponse } from "../Interface/IResponse";
import { IQueryParams } from "../Interface/IQueryParams";
import { defaultResponse } from "./../utils/defaultResponse";
import { BASE_URL } from "./../constant/constants";

/**
 * Fetch Repo data from GitHub API
 * @param queryString - Final query string ie ready to hit GitHub API
 * @returns - Response from GitHub API
 */
export const fetchRepo = async (queryString: string): Promise<IResponse> => {
    try {
        const response = await axios.get(queryString);
        return response.data;
    } catch (error: unknown) {
        console.log(LogErrorMessage(error));
        return defaultResponse;
    }
};

/**
 * Process query object & builds final query string
 * @param requestQuery - Incoming request as object with all query params
 * @returns - Final query string ie ready to hit GitHub API
 */
export const getQueryURL = (requestQuery: IQueryParams): string => {
    const urlBuilder = new UrlBuilder(BASE_URL) as UrlBuilder;

    // Hardcoding sort & order as per requirements
    urlBuilder.setSort("sort", requestQuery.sort);
    urlBuilder.setOrder("order", requestQuery.order);

    if (requestQuery.limit) urlBuilder.setPerPage("per_page", requestQuery.limit);
    if (requestQuery.createdFrom) urlBuilder.setCreated("q=created", requestQuery.createdFrom);
    if (requestQuery.language) urlBuilder.setLanguage("q=language", requestQuery.language);

    return urlBuilder.build();
};
