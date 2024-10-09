import React from 'react'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import LeaveButton from './LeaveButton'
import SwitchToScreenSharingButton from './SwitchToScreenSharingButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const VideoButtons = () => {
  const {connectOnlyWithAudio} = useSelector((state: RootState) => state.meet)
  return (
    <div className='video_buttons_container'>
      <MicButton/>
      {!connectOnlyWithAudio && <CameraButton/>}
      <LeaveButton/>
      {!connectOnlyWithAudio && <SwitchToScreenSharingButton/>}
    </div>
  )
}

export default VideoButtons
