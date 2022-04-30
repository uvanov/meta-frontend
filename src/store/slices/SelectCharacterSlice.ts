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
  showModal: boolean;
  characters: Character[];
}

// Init state
const initialState: InitialState = {
  isShown: true,
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
        name: '',
        cash: 0,
        bank: 0,
        fraction: '',
        job: '',
        status: '',
      },
      empty: true,
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
    }
  }
});

export default selectCharacterSlice.reducer;