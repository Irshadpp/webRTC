import React, { useState } from 'react'
import SendMessageButton from "../../../../public/sendMessageButton.svg"
import { sendMessageUsingDataSignal } from '../../../../utils/webRTCHandler';

const NewMessge = () => {
    const [message, setMessage] = useState<string>("");
    const handleOnChange = (e: any) =>{
        setMessage(e.target.value)
    }

    const handleKeyPressed = (e: any) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            sendMessage()
        }
    }

    const sendMessage = () =>{
        if(message.trim().length > 0){
            console.log("sending the message to other user=========>", message);
            sendMessageUsingDataSignal(message)
        }
        setMessage("")
    }
  return (
    <div className='new_message_container'>
      <input type="text" 
      className='new_message_input'
      value={message}
      onChange={handleOnChange}
      placeholder='Type your message....'
      onKeyDown={handleKeyPressed}
      />
      <img src={SendMessageButton} alt="button" className='new_message_button' onClick={sendMessage}/>
    </div>
  )
}

export default NewMessge
