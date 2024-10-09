import React from 'react'
import ChatLabel from './ChatLabel'
import Messages from './Messages'
import NewMessge from './NewMessge'

const Chat = () => {
  return (
    <div className='chat_section_container'>
      <ChatLabel/>
      <Messages/>
      <NewMessge/>
    </div>
  )
}

export default Chat
