import express from "express";
import { json } from "body-parser";
import {errorHandler, NotFoundError} from "@ir-managex/common"
import cors from 'cors'
import cookieParser from "cookie-parser"
import { appRouter } from "./app/routes";

const app = express();

app.use(json());

const corsOptions = {
    origin: "http://localhost:3000",
    method: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1", appRouter);

app.all("*",()=>{
    throw new NotFoundError();
})

app.use(errorHandler);

export { app };
