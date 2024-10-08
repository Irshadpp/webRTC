import React from "react";

interface InputProps {
    placeholder: string;             
    value: string;                  
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;  
  }

  interface JoinRoomInputsProps {
    roomIdValue: string;                         
    setRoomIdValue: (value: string) => void;      
    nameValue: string;                           
    setNameValue: (value: string) => void;      
    isRoomHost: boolean;                         
  }

const Input = ({ placeholder, value, changeHandler }: InputProps) => {
  return (
    <input
      value={value}
      onChange={changeHandler}
      className="join_room_input"
      placeholder={placeholder}
    />
  );
};

const JoinRoomInputs = ({ roomIdValue, setRoomIdValue, nameValue, setNameValue, isRoomHost }: JoinRoomInputsProps) => {

  const handleRoomIdValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomIdValue(event.target.value);
  };

  const handleNameValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  return (
    <div className="join_room_inputs_container">
      {!isRoomHost && (
        <Input
          placeholder="Enter meeting ID"
          value={roomIdValue}
          changeHandler={handleRoomIdValueChange}
        />
      )}
      <Input
        placeholder="Enter your Name"
        value={nameValue}
        changeHandler={handleNameValueChange}
      />
    </div>
  );
};

export default JoinRoomInputs;
