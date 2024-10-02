import { app } from "./app";
// import { connectDB } from "./config/db";
import {createServer} from "http";
import twilio from 'twilio';
import { socketWrapper } from "./config/socket-wrapper";
// import { envChecker } from "./config/env-checker";
import dotenv from "dotenv";
import { SocketEvents } from "./app/events/socket/socket-events";
dotenv.config();

export let connectedUsers: any[] = [];
export let rooms: any[] = [];

const start = async () => {
  try {
    // envChecker();

    // connectDB();

    const httpServer = createServer(app);
    socketWrapper.init(httpServer);
    SocketEvents.init()

    httpServer.listen("8000", () => {
      console.log("Meet listening on port 8000");
    });

  } catch (error: any) {
    console.log(error.message);
  }

};

start();
