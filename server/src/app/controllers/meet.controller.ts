import { NextFunction, Request, Response } from "express";
import { rooms } from "../..";

export const checkRoomExists = (req: Request, res: Response, next: NextFunction): Response | void =>{
    const { roomId } = req.params;

    console.log(rooms)
    const room = rooms.find((r: any) => r.id === roomId);
    if (!room) {
        return res.status(400).send({success: false, message: "Meeting is not found, please check your meeting id."});
    }
    // if (room.connectedUsers.length > 3) {
    //     return res.status(401).send({success: false,  message: "Meeting is full, try again later."});
    // }

    return res.status(200).send({ success: true });
}
