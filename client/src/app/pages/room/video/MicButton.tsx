import React, { useState } from 'react'

const MicButton = () => {
    const [isMicMute, setIsMicMute] = useState<boolean>(false)

    const handleMicbuttonClick = () =>{
        setIsMicMute(!isMicMute);
    }
  return (
    <div className='video_button_container'>
      <img src={isMicMute ? "/public/images" : "/images/mic.svg"} 
      alt="icone" 
      onClick={handleMicbuttonClick}
      className='video_button_image'
      />
    </div>
  )
}

export default MicButton
