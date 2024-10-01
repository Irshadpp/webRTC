
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const initialState: any = {
  identinty: "",
  isRoomHost: false,
  connectOnlyWithAudio: false,
};

const meetSlice = createSlice({
  name: "meet",
  initialState,
  reducers: {
    setIsRoomHost(state, action: PayloadAction<boolean>){
        state.isRoomHost = action.payload
        console.log(action.payload)
    },
    setConnectOnlyWithAudio (state, action: PayloadAction<boolean>){
        state.connectOnlyWithAudio = action.payload;
    }
  },
});

export const {
    setIsRoomHost,
    setConnectOnlyWithAudio
} = meetSlice.actions;

export default meetSlice.reducer;
