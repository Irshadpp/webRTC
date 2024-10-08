import React, { useEffect } from 'react'
import Participants from './participants/ParticipantsSection'
import Video from './video/Video'
import Chat from './chat/Chat'
import RoomLabel from './RoomLabel'
import "./Room.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import ParticipantsSection from './participants/ParticipantsSection'
import * as webRTChandler from "../../../utils/webRTCHandler"
import Overlay from './Overlay'

const Room = () => {
  const {roomId, isRoomHost, identity, showOverlay} = useSelector((state: RootState) => state.meet);
  useEffect(() =>{
    console.log(identity, "-----");
    webRTChandler.getLocalPreviewAndInitRoomConnection(isRoomHost, identity, roomId)
  },[])
  return (
    <div className='room_container'>
      <ParticipantsSection/>
      <Video/>
      <Chat/>
      <RoomLabel roomId={roomId}/>
      {showOverlay && <Overlay/>}
    </div>
  )
}

export default Room
