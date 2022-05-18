import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import authenticationSlice from './slices/AuthenticationSlice';
import selectCharacterSlice from './slices/SelectCharacterSlice';
import characterCreatorSlice from './slices/CharacterCreatorSlice';
import spawnSelectSlice from './slices/SpawnSelectSlice';
import chatSlice from './slices/ChatSlice';
import hudSlice from './slices/HudSlice';

const rootReducer = combineReducers({
  authentication: authenticationSlice,
  selectCharacter: selectCharacterSlice,
  characterCreator: characterCreatorSlice,
  spawnSelectSlice: spawnSelectSlice,
  chatSlice: chatSlice,
  hudSlice: hudSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;