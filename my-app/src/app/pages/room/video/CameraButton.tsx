import React, { useState } from 'react'
import CameraButtonImage from "../../../../public/camera.svg"
import CameraOffButtonImage from "../../../../public/cameraOff.svg"
import { toggleCamera } from '../../../../utils/webRTCHandler'
const CameraButton = () => {
    const [isIsLocalVideoDisabled, setIsIsLocalVideoDisabled] = useState<boolean>(false)

    const handleCameraButtonClick = () =>{
      toggleCamera(isIsLocalVideoDisabled);
        setIsIsLocalVideoDisabled(!isIsLocalVideoDisabled);
    }
  return (
    <div className='video_button_container'>
      <img src={isIsLocalVideoDisabled ? CameraOffButtonImage : CameraButtonImage} 
      alt="icone" 
      onClick={handleCameraButtonClick}
      className='video_button_image'
      />
    </div>
  )
}

export default CameraButton
