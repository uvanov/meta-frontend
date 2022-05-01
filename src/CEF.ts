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
import {
  selectCharacterSlice,
  CharacterType
} from '@store/slices/SelectCharacterSlice';

// Destruct actions
const {
  setAuthenticationVisibility,
  setAuthorizationError,
  setRecoveryError,
  setRegistrationError,
  clearErrors
} = authenticationSlice.actions;
const {
  setSelectCharacterVisibility,
  setCharacters
} = selectCharacterSlice.actions;

const dispatch = store.dispatch;

export const CEF = {
  Authentication: {
    Visibility(visibility: boolean){
      dispatch(setAuthenticationVisibility({ visibility }));
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
  },
  SelectCharacter: {
    Visibility(visibility: boolean){
      dispatch(setSelectCharacterVisibility({ visibility }));
    },
    SetUserCharacters(characters: CharacterType[]){
      dispatch(setCharacters({ characters }));
    }
  }
};

