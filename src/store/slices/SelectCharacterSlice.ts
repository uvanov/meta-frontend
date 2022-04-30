// Import modules
import { 
  createSlice, 
  PayloadAction 
} from '@reduxjs/toolkit';

// Types 
interface Character {
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
  characters: Character[];
}

// Init state
const initialState: InitialState = {
  isShown: true,
  selectedCharacterIndex: 0,
  showModal: false,
  characters: [
    {
      data: {
        name: 'Michael Norton',
        cash: 512,
        bank: 1000000,
        fraction: '',
        job: '',
        status: 'Example Status',
      },
      empty: false,
      blocked: false
    },
    {
      data: {
        name: 'Sergio Alvarez',
        cash: 120124,
        bank: 153201,
        fraction: '',
        job: '',
        status: 'Example Status',
      },
      empty: false,
      blocked: false
    },
    {
      data: {
        name: '',
        cash: 0,
        bank: 0,
        fraction: '',
        job: '',
        status: '',
      },
      empty: true,
      blocked: true
    }
  ]
};

export const selectCharacterSlice = createSlice({
  name: 'selectCharacter',
  initialState,
  reducers: {
    setVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    },
    setModalVisibility(state, action: PayloadAction<{ modalVisibility: boolean }>) {
      state.showModal = action.payload.modalVisibility;
    },
    setCharacters(state, action: PayloadAction<{ characters: Character[] }>){
      state.characters = action.payload.characters;
    },
    setSelectedCharacterIndex(state, action: PayloadAction<{ index: number }>){
      state.selectedCharacterIndex = action.payload.index;
    }
  }
});

export default selectCharacterSlice.reducer;