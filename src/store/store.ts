import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import authenticationSlice from './slices/AuthenticationSlice';
import selectCharacterSlice from './slices/SelectCharacterSlice';

const rootReducer = combineReducers({
  authentication: authenticationSlice,
  selectCharacter: selectCharacterSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;