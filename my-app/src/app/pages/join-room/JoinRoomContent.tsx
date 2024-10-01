import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import JoinRoomInputs from "./JoinRoomInputs";
import OnlyWithAudioCheckbox from "./OnlyWithAudiocheckBox";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import { getRoomExists } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { setIdentity, setRoomId } from "../../store/meetSlice";

interface JoinRoomContentProps{
    isRoomHost: boolean
}

const JoinRoomContent = () => {

  const {isRoomHost, roomId} = useSelector((state: RootState) => state.meet)
  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleJoinRoom = async () => {
    dispatch(setIdentity(nameValue));
    if(isRoomHost){
      createRoom();
    }else{
      joinRoom();
    }
  };

  const joinRoom = async () =>{
    try {
      const response = await getRoomExists(roomIdValue);
      if(response.success){
        dispatch(setRoomId(roomIdValue))
        navigate("/room");
      }
    } catch (error: any) {
     console.log(error)
     setErrorMessage(error.response.data.message ||  "An error occurred. Please try again.")
    }
  }

  const createRoom = () =>{
    navigate("/room");
  }

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
