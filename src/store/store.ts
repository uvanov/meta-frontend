import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import authenticationSlice from './slices/AuthenticationSlice';

const rootReducer = combineReducers({
  authentication: authenticationSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;