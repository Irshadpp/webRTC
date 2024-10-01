import { NextFunction, Request, Response } from "express";

let connectedUsers: any[] = [];
let rooms: any[] = [];

export const checkRoomExists = (req: Request, res: Response, next: NextFunction): Response | void =>{
    const { roomId } = req.params;

    const room = rooms.find((r: any) => r.id === roomId);
    if (!room) {
        return res.status(400).send({ roomExists: false });
    }
    if (room.connectedUsers.length > 3) {
        return res.status(401).send({ roomExists: true, full: true });
    }

    return res.status(200).send({ roomExists: true, full: false });
}