import express from "express";
import { checkRoomExists } from "../controllers/meet.controller";

const router = express.Router();

router.get("/room-exists/:roomId",checkRoomExists)

export {router as meetRouter}