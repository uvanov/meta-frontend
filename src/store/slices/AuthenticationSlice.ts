// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isShown: true
};

// Init Authentication Slice
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticationVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    }
  }
});

export default authenticationSlice.reducer;