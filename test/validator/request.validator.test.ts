import { RequestValidator, IdValidator } from "./../../src/validator/request.validator";

describe("Function RequestValidator", () => {
    it("Responds with an error as createdFrom param is required", () => {
        const { error } = RequestValidator.validate({});
        expect(error).toBeDefined();
    });

    it("Responds with no error as createdFrom param is supplied as object", () => {
        const input = { createdFrom: "2024-01-01" };
        const { error } = RequestValidator.validate(input);
        expect(error).toBeUndefined();
    });

    it("Responds with an error as date format is wrong", () => {
        const input = { createdFrom: "01-01-2024" };
        const { error } = RequestValidator.validate(input);
        expect(error).toBeDefined();
    });

    it("Responds with an error as language param is empty", () => {
        const input = { createdFrom: "2024-01-01", language: "" };
        const { error } = RequestValidator.validate(input);
        expect(error).toBeDefined();
    });

    it("Responds with an error as limit param is typeof string", () => {
        const input = { createdFrom: "2024-01-01", limit: "" };
        const { error } = RequestValidator.validate(input);
        expect(error).toBeDefined();
    });

    it("Responds with no error as all params are of required type & with some value", () => {
        const input = { createdFrom: "2024-01-01", limit: 15, language: "C++" };
        const { error } = RequestValidator.validate(input);
        expect(error).toBeUndefined();
    });
});

describe("Function IdValidator", () => {
    it("Responds with an error as id param is required", () => {
        const { error } = IdValidator.validate({});
        expect(error).toBeDefined();
    });

    it("Responds with no error as id param is supplied", () => {
        const { error } = IdValidator.validate({ id: 111 });
        expect(error).toBeUndefined();
    });

    it("Responds with error as id param should be type of number", () => {
        const { error } = IdValidator.validate({ id: "abc" });
        expect(error).toBeDefined();
    });
});
