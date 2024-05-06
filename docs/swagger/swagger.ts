import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";
import path from "path";
import yaml from "yamljs";

const swaggerYML = yaml.load(path.resolve(__dirname, "./swagger.yml"));

const initialOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "GitHub Repo API",
            version: version,
            description: "API Docs - Application for discovering popular repositories on GitHub",
        },
    },
};
const options: swaggerJsdoc.Options = {
    swaggerDefinition: {
        ...initialOptions,
        ...swaggerYML,
    },
    apis: [path.resolve(__dirname, "./../../src/routes.ts")],
};

const SwaggerSpec = swaggerJsdoc(options);

export const SwaggerDocs = (app: Express, Port: number) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerSpec));

    app.get("/api-docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(SwaggerSpec);
    });

    console.log(`API Docs are available at http://localhost:${Port}/api-docs`);
};
