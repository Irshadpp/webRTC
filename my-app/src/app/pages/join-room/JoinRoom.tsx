import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { setIsRoomHost } from '../../store/meetSlice';
import JoinRoomTitle from './JoinRoomTitle';
import JoinRoomContent from './JoinRoomContent';
import "./JoinRoom.css"

const JoinRoom = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();
    const {isRoomHost} = useSelector((state: RootState) => state.meet)
    useEffect(() => {
        console.log(".........use effect called")
        const isRoomHost = searchParams.get('host') === "true"
        if (isRoomHost) {
            dispatch(setIsRoomHost(isRoomHost));
        }
        return () =>{
            dispatch(setIsRoomHost(false))
        }
      }, []);
  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
       <JoinRoomTitle isRoomHost={isRoomHost}/>
       <JoinRoomContent/>
      </div>
    </div>
  )
}

export default JoinRoom
