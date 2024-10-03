import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setConnectOnlyWithAudio } from "../../store/meetSlice";

const OnlyWithAudioCheckbox = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {connectOnlyWithAudio} = useSelector((state: RootState) => state.meet)
  const handleConnectionTypeChange = () => {
    dispatch(setConnectOnlyWithAudio(!connectOnlyWithAudio));
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img className="checkbox_image" src="/images/check.png"></img>
        )}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
