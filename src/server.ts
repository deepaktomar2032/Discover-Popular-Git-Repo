require("dotenv").config();
import express, { Express } from "express";
import { routes } from "./routes";

export const app: Express = express();
export const Port = process.env.Port || 8000;

const listenPort = (Port: number) => {
    app.listen(Port, () => console.log(`Server is up & running on http://localhost:${Port}`));
};

const createRoutes = () => {
    routes(app);
};

const start = async () => {
    try {
        if (process.env.NODE_ENV !== "test") {
            await listenPort(Number(Port));
        }
        await createRoutes();
    } catch (error) {
        console.log(error);
    }
};

export default {
    start,
};
