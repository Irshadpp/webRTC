import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { resetState } from '../../../store/meetSlice';
import { useNavigate } from 'react-router-dom';


const LeaveButton = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const handleRoomDisconnect = async () =>{
        const siteUrl = window.location.origin;
        window.location.href = siteUrl;

        setTimeout(() => {
          dispatch(resetState());
        }, 500); 
    }
  return (
    <div className='video_button_container'>
      <button className='video_button_end' onClick={handleRoomDisconnect}>
        Leave Room
      </button>
    </div>
  )
}

export default LeaveButton
