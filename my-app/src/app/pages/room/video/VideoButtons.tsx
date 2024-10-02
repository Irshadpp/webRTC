import React from 'react'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import LeaveButton from './LeaveButton'
import SwitchToScreenSharingButton from './SwitchToScreenSharingButton'

const VideoButtons = () => {
  return (
    <div className='video_buttons_container'>
      <MicButton/>
      <CameraButton/>
      <LeaveButton/>
      <SwitchToScreenSharingButton/>
    </div>
  )
}

export default VideoButtons
