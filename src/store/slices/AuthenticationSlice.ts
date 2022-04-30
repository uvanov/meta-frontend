// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Types
type ViewType = 'registration' | 'authorization' | 'recovery';

// Initial state
const initialState = {
  isShown: false,
  view: 'registration',
  inputs: {
    authorization: {
      login: {
        errorText: ''
      },
      password: {
        errorText: ''
      }
    },
    registration: {
      login: {
        errorText: ''
      },
      email: {
        errorText: ''
      },
      password: {
        errorText: ''
      },
      repeatPassword: {
        errorText: ''
      },
      promo: {
        errorText: ''
      }
    },
    recovery: {
      email: {
        errorText: ''
      },
      code: {
        errorText: ''
      }
    }
  }
};

export type AuthorizationFieldType = keyof typeof initialState.inputs.authorization;
export type RegistrationFieldType = keyof typeof initialState.inputs.registration;
export type RecoveryFieldType = keyof typeof initialState.inputs.recovery;
export type InterfacesListType = keyof typeof initialState.inputs;

// Init Authentication Slice
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticationVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    },
    setAuthenticationView(state, action: PayloadAction<{ view: ViewType }>){
      state.view = action.payload.view;
    },
    setAuthorizationError(state, action: PayloadAction<{ field: AuthorizationFieldType, value: string }>){
      state.inputs.authorization[action.payload.field].errorText = action.payload.value;
    },
    setRegistrationError(state, action: PayloadAction<{ field: RegistrationFieldType, value: string }>){
      state.inputs.registration[action.payload.field].errorText = action.payload.value;
    },
    setRecoveryError(state, action: PayloadAction<{ field: RecoveryFieldType, value: string }>){
      state.inputs.recovery[action.payload.field].errorText = action.payload.value;
    },
    clearErrors(state, action: PayloadAction<{ interface: InterfacesListType }>){

      for(const key in state.inputs[action.payload.interface]){
        // @ts-ignore
        if(state.inputs[action.payload.interface].hasOwnProperty(key)){
        // @ts-ignore
          state.inputs[action.payload.interface][key].errorText = '';
        }

      }
    }
  }
});

export default authenticationSlice.reducer;