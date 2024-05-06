import request from "supertest";
import { statusCode } from "./../../src/utils/statusCode";
import App, { app } from "../../src/server";

describe("GET /api/popular-repo", () => {
    beforeAll(async () => {
        App.start();
    });

    it("Responds 200 OK with if API gets a hit with createdFrom query param", async () => {
        const result = await request(app).get(`/api/popular-repo?createdFrom=2024-05-02`);
        expect(result.statusCode).toBe(statusCode.successful_request);
        expect(result.body).toBeDefined();
    });

    it("Responds 400 OK with if API gets a hit with no query param", async () => {
        const result = await request(app).get(`/api/popular-repo`);
        expect(result.statusCode).toBe(statusCode.bad_request);
    });

    it("Responds 200 OK and length of items array should be 10", async () => {
        const result = await request(app).get(`/api/popular-repo?createdFrom=2024-01-01&limit=10`);
        expect(result.statusCode).toBe(statusCode.successful_request);
        expect(result.body.response.items.length).toEqual(10);
    });

    it("Responds 200 OK and array of items is sorted by number of stars in desc order", async () => {
        const result = await request(app).get(`/api/popular-repo?createdFrom=2024-01-01&limit=10`);
        expect(result.statusCode).toBe(statusCode.successful_request);
        for (let i = 0; i < result.body.response.items.length - 1; ++i) {
            expect(result.body.response.items[i].stargazers_count).toBeGreaterThanOrEqual(result.body.response.items[i + 1].stargazers_count);
        }
    });

    it("Responds 200 OK and array of items only contain language filter ie Python", async () => {
        const language = "Python";
        const result = await request(app).get(`/api/popular-repo?createdFrom=2024-01-01&language=${language}`);
        expect(result.statusCode).toBe(statusCode.successful_request);
        for (let i = 0; i < result.body.response.items.length - 1; ++i) {
            expect(result.body.response.items[i].language).toBe(language);
        }
    });
});
