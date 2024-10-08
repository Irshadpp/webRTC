import React from 'react'

const messages: any = [
    {
        content: "hey",
        identity: "Shahal",
        messageCreatedByMe: true
    },
    {
        content: "hey guyzz",
        identity: "Shahal",
        messageCreatedByMe: true
    },
    {
        content: "hellooooooo",
        identity: "razik",
        messageCreatedByMe: false
    },
    {
        content: "ok fine how is it going",
        identity: "shamil",
        messageCreatedByMe: false
    },
]

const Message = ({author, content, sameAuthor, messageCreatedByMe}) =>{
    const alignClass = messageCreatedByMe ? "message_align_right" : "message_align_left"

    const authorText = messageCreatedByMe ? "You" : author

    const contentAdditionalStyle = messageCreatedByMe ? "message_right_styles" : "message_left_styles"

    return (
        <div className={`message_container ${alignClass}`}>
            {!sameAuthor && <p className='message_little'>{authorText}</p>}
            <p className={`message_content ${contentAdditionalStyle}`}>{content}</p>
        </div>
    )
}

const Messages = () => {
  return (
    <div className='messages_container'>
      {messages && messages.map((message: any, index: number)=>{
        const sameAuthor = index > 0 && message.identity === messages[index - 1].identity
        return (
            <Message
            key={index}
            author={message.identity}
            content={message.content}
            sameAuthor={sameAuthor}
            messageCreatedByMe={message.messageCreatedByMe}
            />
        )
      })}
    </div>
  )
}

export default Messages
