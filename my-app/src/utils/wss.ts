import { io } from "socket.io-client";
import store from "../app/store/store";
import { setParticipants, setRoomId } from "../app/store/meetSlice";
import * as webRTCHandler from "./webRTCHandler";

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

    socket.on('conn-prepare', ({connUserSocketId}:any) =>{
        console.log("listened conn-preapare event========>", connUserSocketId)
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, false)

        //inform the user which just join the room that we are perpared for incoming connection
        socket.emit('conn-init', {connUserSocketId: connUserSocketId})
    })

    socket.on('conn-signal', (data: any) =>{
        webRTCHandler.handleSignalingDatam(data);
    })

    socket.on('conn-init', (data: any) =>{
        const connUserSocketId = {data};
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
    })
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

export const signalPeerData = (data: any) =>{
    socket.emit("conn-signal", data)
}
