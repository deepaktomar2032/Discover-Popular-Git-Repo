import { MarkFavourite } from "./../../src/helper/MarkFavourite";

describe("Class MarkFavourite", () => {
    it("Responds with true when we save an id (111), fetch complete list & to try to look for same", () => {
        const id = 111;
        const markFavourite = MarkFavourite.getInstance();
        markFavourite.save(id);
        expect(markFavourite.fetch().has(id)).toBe(true);
    });

    it("Responds with false when we delete an id (111), fetch complete list & to try to look for same", () => {
        const id = 111;
        const markFavourite = MarkFavourite.getInstance();
        markFavourite.delete(id);
        expect(markFavourite.fetch().has(id)).toBe(false);
    });
});
