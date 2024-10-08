import { useNavigate } from "react-router-dom";

interface ButtonPropsTypes{
    buttonText: string;
    cancelButton?: boolean;
    onClickHandler: () => void;
}

interface JoinRoomButtonsPropsTypes{
    handleJoinRoom: () => void;
    isRoomHost: boolean;
}

const Button = ({ buttonText, cancelButton = false, onClickHandler }:ButtonPropsTypes) => {
  const buttonClass = cancelButton
    ? "join_room_cancel_button"
    : "join_room_success_button";

  return (
    <button onClick={onClickHandler} className={buttonClass}>
      {buttonText}
    </button>
  );
};

const JoinRoomButtons = ({ handleJoinRoom, isRoomHost }: JoinRoomButtonsPropsTypes) => {
  const successButtonText = isRoomHost ? "Host" : "Join";
  const navigate = useNavigate();
  const pushToIntroductionPage = () => {
    navigate("/");
  };

  return (
    <div className="join_room_buttons_container">
      <Button buttonText={successButtonText} onClickHandler={handleJoinRoom} />
      <Button
        buttonText="Cancel"
        cancelButton
        onClickHandler={pushToIntroductionPage}
      />
    </div>
  );
};

export default JoinRoomButtons;

