import { getQueryURL, fetchRepo } from "./../../src/helper/helperFunction";
import { IQueryParams } from "./../../src/Interface/IQueryParams";
import { BASE_URL } from "./../../src/constant/constants";

describe("Function getQueryURL", () => {
    it("Responds with sort, order and created params in query string", () => {
        const requestQuery = { sort: "stars", order: "desc", createdFrom: "2024-01-01" } as IQueryParams;
        const result = getQueryURL(requestQuery);
        expect(result).toBe(`${BASE_URL}?sort=stars&order=desc&q=created:>2024-01-01`);
    });

    it("Responds with sort, order, language and created params in query string", () => {
        const requestQuery = { sort: "stars", order: "desc", language: "Typescript", createdFrom: "2024-01-01" } as IQueryParams;
        const result = getQueryURL(requestQuery);
        expect(result).toEqual(`${BASE_URL}?sort=stars&order=desc&q=created:>2024-01-01&q=language:Typescript`);
    });

    it("Responds with sort, order, language, limit and created params in query string", () => {
        const requestQuery = { sort: "stars", order: "desc", language: "Javascript", createdFrom: "2024-01-01", limit: 20 } as IQueryParams;
        const result = getQueryURL(requestQuery);
        expect(result).toEqual(`${BASE_URL}?sort=stars&order=desc&per_page=20&q=created:>2024-01-01&q=language:Javascript`);
    });
});

describe("Function fetchRepo", () => {
    it("Responds with 0 total count as its a future date", async () => {
        const queryString = `${BASE_URL}?sort=stars&order=desc&q=created:>2025-01-01`;
        const result = await fetchRepo(queryString);
        expect(result.total_count).toBe(0);
        expect(result.items.length).toBe(0);
    });

    it("Responds with greater than or equal to 0 total count as date is 2020-01-01", async () => {
        const queryString = `${BASE_URL}?sort=stars&order=desc&q=created:>2020-01-01`;
        const result = await fetchRepo(queryString);
        expect(result.total_count).toBeGreaterThanOrEqual(0);
        expect(result.items.length).toBeGreaterThanOrEqual(0);
    });
});
