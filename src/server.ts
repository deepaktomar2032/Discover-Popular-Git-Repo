require("dotenv").config();
import express, { Express } from "express";
import { routes } from "./routes";
import { LogErrorMessage } from "./utils/error-handler";
import { SwaggerDocs } from "../docs/swagger/swagger";

export const app: Express = express();
export const Port = process.env.Port || 8000;

const listenPort = (Port: number) => {
    app.listen(Port, () => console.log(`Server is up & running on http://localhost:${Port}`));
};

const createRoutes = () => {
    routes(app);
};

const createSwaggerDocs = () => {
    SwaggerDocs(app, Number(Port));
};

const start = async () => {
    try {
        if (process.env.NODE_ENV !== "test") {
            await listenPort(Number(Port));
            createSwaggerDocs();
        }
        await createRoutes();
    } catch (error: unknown) {
        console.log(LogErrorMessage(error));
    }
};

export default {
    start,
};
