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
  messages: [
    {
      timestamp: '11:28',
      message: '<{#ffffff}%Nickname%: ><{#FF3E3E}ALERT!>'
    },
    {
      timestamp: '11:23',
      message: '<{#ffffff}Alex: >Здарова, чернь. Как твои дела? У меня всё прекрасно. Знаешь почему? Сейчас расскажу.'
    },
  ] as MessageType[]
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