import React, { useState } from 'react'
import ScreenShareButtonImg from "../../../../public/switchToScreenSharing.svg"
import LocalScreenSharingPreview from './LocalScreenSharingPreview';
import { toggleScreenShare } from '../../../../utils/webRTCHandler';

const constraints = {
  audio: false,
  video: true
}

const SwitchToScreenSharingButton = () => {
    const [isScreenSharingActive, setIsScreenSharingActive] = useState<boolean>();
    const [screenSharingStream, setScreenSharingStream] = useState<any>(null)

    const handleScreenShareToggle = async () =>{
      if(!isScreenSharingActive){
        let stream = null;
        try {
          stream = await navigator.mediaDevices.getDisplayMedia()
        } catch (error) {
          console.log("error in screen sharing function");
        }
        if(stream){
            setScreenSharingStream(stream)
            toggleScreenShare(isScreenSharingActive as boolean, stream)
            setIsScreenSharingActive(true);
          }
        }else{
          toggleScreenShare(isScreenSharingActive)
          setIsScreenSharingActive(false);

          screenSharingStream.getTracks().forEach((t: any) => t.stop());
          setScreenSharingStream(null);
        }
    }
  return (
    <>
    <div className='video_button_container'>
      <img 
      src={ScreenShareButtonImg} 
      alt="screen share button"
      onClick={handleScreenShareToggle}
      className='video_button_image'
      />
      {isScreenSharingActive && <LocalScreenSharingPreview stream={screenSharingStream}/>}
    </div>
      </>
  )
}

export default SwitchToScreenSharingButton
