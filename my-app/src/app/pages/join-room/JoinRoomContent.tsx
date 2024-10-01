import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import JoinRoomInputs from "./JoinRoomInputs";
import OnlyWithAudioCheckbox from "./OnlyWithAudiocheckBox";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";

interface JoinRoomContentProps{
    isRoomHost: boolean
}

const JoinRoomContent = () => {

  const {isRoomHost} = useSelector((state: RootState) => state.meet)

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleJoinRoom = () => {
    //joining the room
    console.log("joining");
  };

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
       <OnlyWithAudioCheckbox/>
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
      />
    </>
  );
};

export default JoinRoomContent;
