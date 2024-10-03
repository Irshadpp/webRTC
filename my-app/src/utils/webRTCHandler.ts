import { setShowOverlay } from "../app/store/meetSlice";
import store from "../app/store/store";
import * as wss from "./wss"
import Peer from "simple-peer"

const defaultConstraints = {
    audio: true,
    video: true,
}

let localStream: any;
let streams: any[];

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



let peers: any = {};

const getConfiguration = () =>{
    return {
        iceServers: [
            {
                urls: 'stun:stun.l.google.com:19302'
            }
        ]
    }
}

export const prepareNewPeerConnection = (connUserSocketId: any, isInitiator: boolean) => {
    try {
        if (!localStream) {
            console.error("localStream is not initialized!");
            return;
        }

        console.log("prepareNewPeerConnection function", connUserSocketId, isInitiator);

        if (window.RTCPeerConnection && window.crypto && (window.crypto as any).getRandomValues) {
            // WebRTC and secure random numbers are supported
        } else {
            console.error("Your browser does not support WebRTC or secure random number generation.");
        }
        

        const configuration = getConfiguration();

        // Initialize the Peer object
        peers[connUserSocketId] = new Peer({
            initiator: isInitiator,
            config: configuration,
            stream: localStream
        });

        console.log("prepare new peer connection peer", peers[connUserSocketId]);

        peers[connUserSocketId].on("signal", (data: any) => {
            const signalData = {
                signal: data,
                connUserSocketId: connUserSocketId
            };
            wss.signalPeerData(signalData);
        });

        peers[connUserSocketId].on("stream", (stream: any) => {
            console.log("new stream received");

            addStream(stream, connUserSocketId);
            streams.push(stream);
        });
    } catch (error) {
        console.error("Error creating Peer object:", error);
    }
};


export const handleSignalingDatam = ( data: any) =>{
    //add signaling data to peer connection
    peers[data.connUserSocketId].signal(data.signal)
}

//////////////////////////////handling UI here///////////////////
const showLocalVideoPreview = (stream: any) =>{
    const videosContainer = document.getElementById("videos_portal");
    videosContainer?.classList.add("videos_portal_styles");

    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video_track_container");
    const videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.srcObject = stream;

   // Apply the transform to flip the video horizontally
   videoElement.style.transform = "scaleX(-1)"; // This flips the video horizontally

    videoElement.onloadedmetadata = () =>{
        videoElement.play()
    };

    videoContainer.appendChild(videoElement);
    videosContainer?.appendChild(videoContainer);
}

const addStream = (stream: any, connectedUserSocketId: string) =>{
    //display incoming stream
    const videosContainer = document.getElementById("videos_portal");
    const videoContainer = document.createElement("div");
    videoContainer.id = connectedUserSocketId;

    videoContainer.classList.add("video_track_container");
    const videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.srcObject = stream;
    videoElement.id = `${connectedUserSocketId}-video`

     // Apply the transform to flip the video horizontally
//    videoElement.style.transform = "scaleX(-1)"; // This flips the video horizontally

   videoElement.onloadedmetadata = () =>{
       videoElement.play()
   };

   videoContainer.appendChild(videoElement);
   videosContainer?.appendChild(videoContainer);
}
