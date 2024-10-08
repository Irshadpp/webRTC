import React, { useState } from 'react'
import MicButtonImage from "../../../../public/mic.svg"
import MicOffButtonImage from "../../../../public/micOff.svg"
import { toggleMic } from '../../../../utils/webRTCHandler'

const MicButton = () => {
    const [isMicMute, setIsMicMute] = useState<boolean>(false)

    const handleMicbuttonClick = () =>{
      toggleMic(isMicMute);
        setIsMicMute(!isMicMute);
    }
  return (
    <div className='video_button_container'>
      <img src={isMicMute ? MicOffButtonImage : MicButtonImage} 
      alt="icone" 
      onClick={handleMicbuttonClick}
      className='video_button_image'
      />
    </div>
  )
}

export default MicButton
