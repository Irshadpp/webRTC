import { io } from "socket.io-client";
import store from "../app/store/store";
import { setParticipants, setRoomId } from "../app/store/meetSlice";

const server = "http://localhost:8000"

let socket: any;
export const connectWithSocketIOServer = () =>{

     socket = io(server);
    socket.on("connect", () =>{
        console.log("Successfully connected with socket io server with id:", socket.id);
    });

    socket.on('room-id', ({roomId}: any) =>{
        store.dispatch(setRoomId(roomId))
    });

    socket.on('room-updated', ({connectedUsers}: any) =>{
        console.log('room updated listener called')
        console.log(connectedUsers, "updated.........")
        store.dispatch(setParticipants(connectedUsers));
    });
}

export const createNewRoom = (identity: string) =>{
    const data = {
        identity
    }
    socket.emit("create-new-room", data)
}

export const joinRoom = (identity: string, roomId: string) =>{
    const data = {
        identity,
        roomId
    }

    console.log("event emited to join-room")
    socket.emit("join-room", data)
}
