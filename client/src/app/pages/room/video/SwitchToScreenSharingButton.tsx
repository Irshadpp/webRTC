import React, { useState } from 'react'

const SwitchToScreenSharingButton = () => {
    const [isScreenSharingActive, setIsScreenSharingActive] = useState<boolean>();

    const handleScreenShareToggle = () =>{
        setIsScreenSharingActive(!isScreenSharingActive)
    }
  return (
    <div className='video_button_container'>
      <img 
      src="/images/switchToScreenSharing.svg" 
      alt="screen share button"
      onClick={handleScreenShareToggle}
      className='video_button_image'
      />
    </div>
  )
}

export default SwitchToScreenSharingButton
