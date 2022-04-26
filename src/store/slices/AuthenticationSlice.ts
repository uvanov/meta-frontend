// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Types
type ViewType = 'registration' | 'authorization' | 'recovery';

// Initial state
const initialState = {
  isShown: true,
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

type AuthorizationFieldType = keyof typeof initialState.inputs.authorization;
type RegistrationFieldType = keyof typeof initialState.inputs.registration;
type RecoveryFieldType = keyof typeof initialState.inputs.recovery;

// Init Authentication Slice
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticationVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    },
    setAuthenticationView(state, action: PayloadAction<{ view: ViewType }>){
      console.log(1)
      state.view = action.payload.view;
    },
    setAuthorizationError(state, action: PayloadAction<{ field: AuthorizationFieldType, value: string }>){
      state.inputs.authorization[action.payload.field].errorText = action.payload.field;
    },
    setRegistrationError(state, action: PayloadAction<{ field: RegistrationFieldType, value: string }>){
      state.inputs.registration[action.payload.field].errorText = action.payload.field;
    },
    setRecoveryError(state, action: PayloadAction<{ field: RecoveryFieldType, value: string }>){
      state.inputs.recovery[action.payload.field].errorText = action.payload.field;
    }
  }
});

export default authenticationSlice.reducer;