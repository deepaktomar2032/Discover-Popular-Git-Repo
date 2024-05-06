import { Router } from "express";
import { getPopularRepo } from "./controller/getPopularRepo.controller";
import { queryValidator } from "./middleware/queryValidator.middleware";
import { fetchFavouriteRepo, markFavouriteRepo, unMarkFavouriteRepo } from "./controller/markFavourite.controller";
import { idValidator } from "./middleware/idValidator.middleware";

/**
 * Handle all routes
 * @param router
 */
export const routes = (router: Router) => {
    // Route to get popular Repo
    router.get("/api/popular-repo", queryValidator, getPopularRepo);

    // Routes to Mark/Unmark/Fetch favourite Repo
    router.post("/api/favourite-repo/:id", idValidator, markFavouriteRepo);
    router.delete("/api/favourite-repo/:id", idValidator, unMarkFavouriteRepo);
    router.get("/api/favourite-repo", fetchFavouriteRepo);
};
