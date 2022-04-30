// Import modules
import { store } from '@store/store';

// Import slices
import {
  authenticationSlice,
  AuthorizationFieldType,
  RegistrationFieldType,
  RecoveryFieldType,
  InterfacesListType
} from '@store/slices/AuthenticationSlice';

// Destruct actions
const {
  setVisibility,
  setAuthorizationError,
  setRecoveryError,
  setRegistrationError,
  clearErrors
} = authenticationSlice.actions;

const dispatch = store.dispatch;

export const CEF = {
  Authentication: {
    Visibility(visibility: boolean){
      dispatch(setVisibility({ visibility }));
    },
    Clear(interfaceToClear: InterfacesListType){
      dispatch(clearErrors({ interface: interfaceToClear }));
    },
    Authorization: {
      Error(field: AuthorizationFieldType, text: string){
        dispatch(setAuthorizationError({ field, value: text }));
      }
    },
    Registration: {
      Error(field: RegistrationFieldType, text: string){
        dispatch(setRegistrationError({ field, value: text }));
      }
    },
    Recovery: {
      Error(field: RecoveryFieldType, text: string){
        dispatch(setRecoveryError({ field, value: text }));
      }
    }
  }
};

