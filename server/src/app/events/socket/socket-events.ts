import { socketWrapper } from "../../../config/socket-wrapper";
import { createNewRoom } from "../../utils/create-new-room";
import { disconnect } from "../../utils/disconnect";
import { joinRoom } from "../../utils/join-room";


export class SocketEvents{
    static init(){
        const io = socketWrapper.io;

        io.on('connection', (socket) =>{
            console.log(`User connected ${socket.id}`);

            socket.on('create-new-room', ({identity}) =>{
                console.log(`hosting new room ${identity}`);
                createNewRoom(identity, socket);
            });

           socket.on('join-room', ({identity, roomId})=>{
            console.log("join room identity: ", identity, "roomId: ", roomId);
            joinRoom(identity, roomId, socket, io);
           })

            socket.on('disconnect', () =>{
                console.log(`User disconnected ${socket.id}`)
                disconnect(socket, io);
            })
        })
    }
}