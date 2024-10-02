import { v4 as uuidv4 } from 'uuid';
import { connectedUsers, rooms } from '../..';

export const joinRoom = (identity: string, roomId: string, socket: any, io: any) =>{
    const newUser = {
        identity,
        id: uuidv4(),
        socketId: socket.id,
        roomId
    }

    const room = rooms.find(r => r.id === roomId);
    room.connectedUsers.push(newUser);

    socket.join(roomId);

    connectedUsers.push(newUser);

    //emit to all users which are already in this room to prepare peer connection

    io.to(roomId).emit("room-updated", {connectedUsers: room.connectedUsers})
}