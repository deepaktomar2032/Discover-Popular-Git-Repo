import request from "supertest";
import { statusCode } from "./../../src/utils/statusCode";
import App, { app } from "../../src/server";

describe("POST /api/favourite-repo/:id", () => {
    beforeAll(async () => {
        App.start();
    });

    it("Responds with 200 OK when we try to hit API with an id 111 and 111 should be inside response", async () => {
        const id = 111;
        const result = await request(app).post(`/api/favourite-repo/${id}`);
        expect(result.statusCode).toBe(statusCode.successful_request);

        const fetchResult = await request(app).get(`/api/favourite-repo`);
        expect(fetchResult.body.favouriteRepoList.includes(id)).toBe(true);
    });
});

describe("DELETE /api/favourite-repo/:id", () => {
    beforeAll(async () => {
        App.start();
    });

    it("Responds with 200 OK when we try to hit API with an id 222 and 222 shouldn't be inside response ", async () => {
        const id = `222`;
        const result = await request(app).delete(`/api/favourite-repo/${id}`);
        expect(result.statusCode).toBe(statusCode.successful_request);

        const fetchResult = await request(app).get(`/api/favourite-repo`);
        expect(fetchResult.body.favouriteRepoList.includes(id)).toBe(false);
    });
});

describe("GET /api/favourite-repo", () => {
    beforeAll(async () => {
        App.start();
    });

    it("Responds with 200 OK when we try to hit the API end point", async () => {
        const result = await request(app).get(`/api/favourite-repo`);
        expect(result.statusCode).toBe(statusCode.successful_request);
        expect(result.body).toBeDefined();
    });

    it("Responds with 200 OK & property 'favouriteRepoList' should be present inside the response", async () => {
        const result = await request(app).get(`/api/favourite-repo`);
        expect(result.body.favouriteRepoList).toBeDefined();
        expect(result.body.favouriteRepoList.length).toBeGreaterThanOrEqual(0);
    });
});
