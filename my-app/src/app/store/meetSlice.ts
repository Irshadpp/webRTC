
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const initialState: any = {
  identinty: "",
  isRoomHost: false,
  connectOnlyWithAudio: false,
  roomId: null,
};

const meetSlice = createSlice({
  name: "meet",
  initialState,
  reducers: {
    setIsRoomHost(state, action: PayloadAction<boolean>){
        state.isRoomHost = action.payload
    },
    setConnectOnlyWithAudio (state, action: PayloadAction<boolean>){
        state.connectOnlyWithAudio = action.payload;
    },
    setRoomId (state, action: PayloadAction<string>){
      state.roomId = action.payload
    },
    setIdentity (state, action: PayloadAction<string>){
      state.identinty = action.payload
    }
  },
});

export const {
    setIsRoomHost,
    setConnectOnlyWithAudio,
    setRoomId,
    setIdentity
} = meetSlice.actions;

export default meetSlice.reducer;
