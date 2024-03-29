// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Types

// Initial state
const initialState = {
  isShown: false,
  isNameValid: null as null | boolean,
  isSurnameValid: null as null | boolean,
  values: {
    dna: {
      mother: {
        list: [
          'Hannah', 'Aubrey', 'Jasmine', 'Gisele', 'Amelia', 'Isabella', 'Zoe', 'Ava', 'Camila', 'Violet',
          'Sophia', 'Evelyn', 'Nicole', 'Ashley', 'Gracie', 'Brianna', 'Natalie', 'Olivia', 'Elizabeth',
          'Charlotte', 'Emma', 'Misty'
        ],
        min: 0,
        max: 21,
        step: 1,
      },
      father: {
        list: [
          'Benjamin', 'Daniel', 'Joshua', 'Noah', 'Andrew', 'Juan', 'Alex', 'Isaac', 'Evan', 'Ethan', 'Vincent',
          'Angel', 'Diego', 'Adrian', 'Gabriel', 'Michael', 'Santiago', 'Kevin', 'Louis', 'Samuel', 'Anthony',
          'Claude', 'Niko', 'John'
        ],
        min: 0,
        max: 23,
        step: 1,
      },
      parentSimilarity: {
        min: 0,
        max: 1,
        step: 0.1
      }
    },
    skin: {
      step: 1,
      defects: {
        min: 0,
        max: 30,
      },
      aging: {
        min: 0,
        max: 30,
      },
      types: {
        min: 0,
        max: 30
      }
    },
    face: {
      min: 0,
      max: 1,
      step: 0.1,
    },
    hair: {
      min: 0,
      max: 20,
      step: 1
    }
  }
};

export const characterCreatorSlice = createSlice({
  name: 'characterCreator',
  initialState,
  reducers: {
    setCharacterCreatorVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    },
    setNameValid(state, action: PayloadAction<{ valid: boolean }>){
      state.isNameValid = action.payload.valid;
    },
    setSurnameValid(state, action: PayloadAction<{ valid: boolean }>){
      state.isSurnameValid = action.payload.valid;
    }
  }
});

export default characterCreatorSlice.reducer;