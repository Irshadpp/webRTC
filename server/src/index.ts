import { app } from "./app";
// import { connectDB } from "./config/db";
import {createServer} from "http";
import { v4 as uuidv4 } from 'uuid';
import twilio from 'twilio';
import { socketWrapper } from "./config/socket-wrapper";
// import { envChecker } from "./config/env-checker";
import dotenv from "dotenv";
dotenv.config();

const start = async () => {
  try {
    // envChecker();

    // connectDB();

    const httpServer = createServer(app);
    socketWrapper.init(httpServer);

    httpServer.listen("8000", () => {
      console.log("Meet listening on port 8000");
    });

  } catch (error: any) {
    console.log(error.message);
  }

};

start();
