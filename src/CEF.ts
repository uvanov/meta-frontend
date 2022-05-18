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
import {
  hudSlice,
  HeadlightsType,
  TurnSignalsType
} from '@store/slices/HudSlice';

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
const {
  setSpeed,
  setDateDay,
  setDateTime,
  setDoorsUnlocked,
  setEngineHealth,
  setEngineTurnedOn,
  setFood,
  setFuel,
  setHeadlights,
  setHintsOpened,
  setHudVisibility,
  setMaximumSpeed,
  setMoney,
  setPlayerId,
  setSafeZoneFromBottom,
  setSafeZoneFromLeft,
  setSeatBelt,
  setServerOnline,
  setSpeedometerVisibility,
  setTurnSignals
} = hudSlice.actions;

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
  },
  Hud: {
    Visibility(visibility: boolean){
      dispatch(setHudVisibility({ visibility }));
    },
    SetSafeZoneFromLeft(fromLeft: string){
      dispatch(setSafeZoneFromLeft({ fromLeft }));
    },
    SetSafeZoneFromBottom(fromBottom: string){
      dispatch(setSafeZoneFromBottom({ fromBottom }));
    },
    SetPlayerId(id: number){
      dispatch(setPlayerId({ id }));
    },
    SetServerOnline(online: number){
      dispatch(setServerOnline({ online }));
    },
    Hints: {
      SetOpened(opened: boolean){
        dispatch(setHintsOpened({ opened }));
      }
    },
    Information: {
      SetMoney(money: number){
        dispatch(setMoney({ money }));
      },
      SetFood(food: number){
        dispatch(setFood({ food }));
      },
      SetDateDay(day: string){
        dispatch(setDateDay({ day }));
      },
      SetDateTime(time: string){
        dispatch(setDateTime({ time }));
      }
    },
    Speedometer: {
      Visibility(visibility: boolean){
        dispatch(setSpeedometerVisibility({ visibility }));
      },
      SetMaximumSpeed(speed: number){
        dispatch(setMaximumSpeed({ speed }));
      },
      SetSpeed(speed: number){
        dispatch(setSpeed({ speed }));
      },
      SetFuel(fuel: number){
        dispatch(setFuel({ fuel }));
      },
      SetEngineHealth(health: number){
        dispatch(setEngineHealth({ health }));
      },
      SetEngineTurnedOn(turnedOn: boolean){
        dispatch(setEngineTurnedOn({ turnedOn }));
      },
      SetDoorsUnlocked(unlocked: boolean){
        dispatch(setDoorsUnlocked({ unlocked }));
      },
      SetSeatBelt(seatBelt: boolean){
        dispatch(setSeatBelt({ seatBelt }));
      },
      SetHeadlights(headlights: HeadlightsType){
        dispatch(setHeadlights({ headlights }));
      },
      SetTurnSignals(turnSignals: TurnSignalsType){
        dispatch(setTurnSignals({ turnSignals }));
      }
    }
  }
};

