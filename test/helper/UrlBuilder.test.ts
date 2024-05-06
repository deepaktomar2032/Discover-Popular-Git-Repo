import { UrlBuilder } from "./../../src/helper/UrlBuilder";
import { BASE_URL, CREATED_KEY, LANGUAGE_KEY, ORDER_KEY, PER_PAGE_KEY, SORT_KEY } from "./../../src/constant/constants";

describe("Class UrlBuilder", () => {
    it("Responds with base url as there is no query param", () => {
        const urlBuilder = new UrlBuilder(BASE_URL);
        expect(urlBuilder.build()).toBe(BASE_URL);
    });

    it("Function setSort Responds with base url and sort param", () => {
        const urlBuilder = new UrlBuilder(BASE_URL);
        urlBuilder.setSort(SORT_KEY, "desc");
        expect(urlBuilder.build()).toBe(`${BASE_URL}?${SORT_KEY}=desc`);
    });

    it("Function setOrder Responds with base url and order param", () => {
        const urlBuilder = new UrlBuilder(BASE_URL);
        urlBuilder.setOrder(ORDER_KEY, "stars");
        expect(urlBuilder.build()).toBe(`${BASE_URL}?${ORDER_KEY}=stars`);
    });

    it("Function setCreated Responds with base url and created param", () => {
        const urlBuilder = new UrlBuilder(BASE_URL);
        const date = "2024-01-01";
        urlBuilder.setCreated(CREATED_KEY, date);
        expect(urlBuilder.build()).toBe(`${BASE_URL}?${CREATED_KEY}:>${date}`);
    });

    it("Function setPerPage Responds with base url and limit param", () => {
        const urlBuilder = new UrlBuilder(BASE_URL);
        const limit = 25;
        urlBuilder.setPerPage(PER_PAGE_KEY, limit);
        expect(urlBuilder.build()).toBe(`${BASE_URL}?${PER_PAGE_KEY}=${limit}`);
    });

    it("Function setLanguage Responds with base url and language param", () => {
        const urlBuilder = new UrlBuilder(BASE_URL);
        const language = "Javascript";
        urlBuilder.setLanguage(LANGUAGE_KEY, language);
        expect(urlBuilder.build()).toBe(`${BASE_URL}?${LANGUAGE_KEY}:${language}`);
    });
});
