import { Router } from "express";
import { getPopularRepo } from "./controller/getPopularRepo.controller";

/**
 * Handle all routes
 * @param router
 */
export const routes = (router: Router) => {
    // Route to get popular Repo
    router.get("/api/popular-repo", getPopularRepo);
};
