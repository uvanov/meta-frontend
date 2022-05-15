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
import { characterCreatorSlice } from '@store/slices/CharacterCreatorSlice';
import { spawnSelectSlice, SpawnPointsArrayType } from '@store/slices/SpawnSelectSlice';
import {
  chatSlice,
  MessageType
} from '@store/slices/ChatSlice';

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
const {
  setCharacterCreatorVisibility,
  setSurnameValid,
  setNameValid
} = characterCreatorSlice.actions;
const {
  setSelectSpawnVisibility,
  setSpawnPoints
} = spawnSelectSlice.actions;
const {
  addMessage,
  setChatVisibility
} = chatSlice.actions;

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
  },
  CharacterCreator: {
    Visibility(visibility: boolean){
      dispatch(setCharacterCreatorVisibility({ visibility }));
    },
    SetNameValid(valid: boolean){
      dispatch(setNameValid({ valid }));
    },
    SetSurnameValid(valid: boolean){
      dispatch(setSurnameValid({ valid }));
    }
  },
  SelectSpawn: {
    Visibility(visibility: boolean){
      dispatch(setSelectSpawnVisibility({ visibility }));
    },
    SetSpawnPoints(points: SpawnPointsArrayType){
      dispatch(setSpawnPoints({ points }));
    }
  },
  Chat: {
    // Visibility(visibility: boolean){
    //   dispatch(setChatVisibility({ visibility }));
    // },
    AddMessage(message: MessageType){
      dispatch(addMessage(message));
    }
  }
};

