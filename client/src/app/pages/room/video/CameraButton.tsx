import React, { useState } from 'react'
const CameraButton = () => {
    const [isIsLocalVideoDisabled, setIsIsLocalVideoDisabled] = useState<boolean>(false)

    const handleCameraButtonClick = () =>{
        setIsIsLocalVideoDisabled(!isIsLocalVideoDisabled);
    }
  return (
    <div className='video_button_container'>
      <img src={isIsLocalVideoDisabled ? "/images/cameraOff.svg" : "/images/camera.s"} 
      alt="icone" 
      onClick={handleCameraButtonClick}
      className='video_button_image'
      />
    </div>
  )
}

export default CameraButton
