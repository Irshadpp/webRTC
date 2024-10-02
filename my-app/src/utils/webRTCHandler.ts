import { setShowOverlay } from "../app/store/meetSlice";
import store from "../app/store/store";
import * as wss from "./wss"

const defaultConstraints = {
    audio: true,
    video: true,
}

let localStream;

export const getLocalPreviewAndInitRoomConnection = (
    isRoomHost: boolean,
    identity: string,
    roomId: null | string = null
) =>{
    navigator.mediaDevices.getUserMedia(defaultConstraints).then(stream =>{
        console.log("Recieved local stream successfully");
        localStream = stream;
        showLocalVideoPreview(localStream);
        store.dispatch(setShowOverlay(false));
        isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity, roomId as string);
    }).catch((error: any) =>{
        console.log("error occured when when trying to get an access to local stream");
        console.log(error)
    })
}

const showLocalVideoPreview = (stream: any) =>{

}