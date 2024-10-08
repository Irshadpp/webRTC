import React, { useEffect } from 'react'
import ConnectingButtons from './ConnectingButtons'
import "./introduction.css"
import logo from "../../../public/logo.png"
import { connectWithSocketIOServer } from '../../../utils/wss'

const Introduction = () => {
  window.onload = () => {
    console.log("Checking WebRTC and secure random number support...");
    if ((window.crypto as any).getRandomValues && window.RTCPeerConnection) {
        console.log("WebRTC and secure random number generation are supported.");
    } else {
        console.log("WebRTC or secure random number generation is not supported.");
    }
};


useEffect(()=>{
  connectWithSocketIOServer();
},[])

  return (
    <div className="introduction_page_container">
    <div className="introduction_page_panel">
      <img src={logo} className="introduction_page_image"></img>
      <ConnectingButtons />
    </div>
  </div>
  )
}

export default Introduction
