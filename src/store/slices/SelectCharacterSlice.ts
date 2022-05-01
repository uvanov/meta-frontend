// Import modules
import { 
  createSlice, 
  PayloadAction 
} from '@reduxjs/toolkit';

// Types 
export interface CharacterType {
  data: {
    name: string;
    cash: number;
    bank: number;
    fraction: string;
    job: string;
    status: string
  },
  empty: boolean,
  blocked: boolean
}

interface InitialState {
  isShown: boolean;
  selectedCharacterIndex: number;
  showModal: boolean;
  characters: CharacterType[];
}

// Init state
const initialState: InitialState = {
  isShown: true,
  selectedCharacterIndex: 0,
  showModal: false,
  characters: []
};

export const selectCharacterSlice = createSlice({
  name: 'selectCharacter',
  initialState,
  reducers: {
    setSelectCharacterVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    },
    setModalVisibility(state, action: PayloadAction<{ modalVisibility: boolean }>) {
      state.showModal = action.payload.modalVisibility;
    },
    setCharacters(state, action: PayloadAction<{ characters: CharacterType[] }>){
      state.characters = action.payload.characters;
    },
    setSelectedCharacterIndex(state, action: PayloadAction<{ index: number }>){
      state.selectedCharacterIndex = action.payload.index;
    }
  }
});

export default selectCharacterSlice.reducer;
