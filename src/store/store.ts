import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import authenticationSlice from './slices/AuthenticationSlice';
import selectCharacterSlice from './slices/SelectCharacterSlice';
import characterCreatorSlice from './slices/CharacterCreatorSlice';
import spawnSelectSlice from './slices/SpawnSelectSlice';

const rootReducer = combineReducers({
  authentication: authenticationSlice,
  selectCharacter: selectCharacterSlice,
  characterCreator: characterCreatorSlice,
  spawnSelectSlice: spawnSelectSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;