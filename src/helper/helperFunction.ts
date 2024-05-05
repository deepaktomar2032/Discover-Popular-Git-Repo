import axios from "axios";
import { LogErrorMessage } from "./../utils/error-handler";

/**
 * Fetch Repo data from GitHub API
 * @param queryString - query string
 * @returns - Response from GitHub API
 */
export const fetchRepo = async (queryString: string) => {
    try {
        const response = await axios.get(queryString);
        return response.data;
    } catch (error: unknown) {
        console.log(LogErrorMessage(error));
    }
};
