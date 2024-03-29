// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Type
export interface MessageType {
  timestamp: string;
  message: string;
}

// Initial state
const initialState = {
  isShown: true,
  messages: [] as MessageType[]
};


export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    },
    addMessage(state, action: PayloadAction<MessageType>){
      state.messages.push({
        timestamp: action.payload.timestamp,
        message: action.payload.message
      });
    }
  }
});

export default chatSlice.reducer;