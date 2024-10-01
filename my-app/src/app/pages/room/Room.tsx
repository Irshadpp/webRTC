import React from 'react'
import Participants from './participants/ParticipantsSection'
import Video from './video/Video'
import Chat from './chat/Chat'
import RoomLabel from './RoomLabel'
import "./Room.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import ParticipantsSection from './participants/ParticipantsSection'

const Room = () => {
  const {roomId} = useSelector((state: RootState) => state.meet)
  return (
    <div className='room_container'>
      <ParticipantsSection/>
      <Video/>
      <Chat/>
      <RoomLabel roomId={roomId}/>
    </div>
  )
}

export default Room
