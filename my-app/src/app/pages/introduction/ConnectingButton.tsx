import React from "react";
import './introduction.css'

interface ConnectingButtonProps {
  createRoomButton?: boolean;  
  buttonText: string;          
  onClickHandler: () => void;  
}

const ConnectingButton: React.FC<ConnectingButtonProps> = ({
  createRoomButton = false,
  buttonText,
  onClickHandler,
}) => {
  const buttonClass = createRoomButton
    ? "create_room_button"
    : "join_room_button";

  return (
    <button className={buttonClass} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default ConnectingButton;
