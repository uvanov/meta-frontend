// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Type
export type HeadlightsType = 'high' | 'low' | 'off';
export type TurnSignalsType = 'left' | 'right' | 'both' | 'off';

// Initial state
const initialState = {
  isShown: true,
  safeZone: {
    fromLeft: '20%',
    fromBottom: '20%'
  },
  header: {
    playerId: 0,
    serverOnline: 0
  },
  hints: {
    opened: false
  },
  information: {
    money: 0,
    food: 0,
    date: {
      day: '00.00.0000',
      time: '00:00'
    }
  },
  vehicle: {
    visible: true,
    maximumVehicleSpeed: 100,
    speedometer: {
      speed: 0,
      fuel: 100,
      engine: {
        health: 100,
        turnedOn: false
      },
      doors: false,
      seatBelt: false,
      headlights: 'off' as HeadlightsType, // high - ближний свет, low - дальний
      turnSignals: 'off' as TurnSignalsType
    }
  }
};

export const hudSlice = createSlice({
  name: 'hud',
  initialState,
  reducers: {
    setHudVisibility(state, action: PayloadAction<{ visibility: boolean }>){
      state.isShown = action.payload.visibility;
    },
    setSafeZoneFromLeft(state, action: PayloadAction<{ fromLeft: string }>){
      state.safeZone.fromLeft = action.payload.fromLeft;
    },
    setSafeZoneFromBottom(state, action: PayloadAction<{ fromBottom: string }>){
      state.safeZone.fromBottom = action.payload.fromBottom;
    },
    setPlayerId(state, action: PayloadAction<{ id: number }>){
      state.header.playerId = action.payload.id;
    },
    setServerOnline(state, action: PayloadAction<{ online: number }>){
      state.header.serverOnline = action.payload.online;
    },
    setHintsOpened(state, action: PayloadAction<{ opened: boolean }>){
      state.hints.opened = action.payload.opened;
    },
    setMoney(state, action: PayloadAction<{ money: number }>){
      state.information.money = action.payload.money;
    },
    setFood(state, action: PayloadAction<{ food: number }>){
      state.information.food = action.payload.food;
    },
    setDateDay(state, action: PayloadAction<{ day: string }>){
      state.information.date.day = action.payload.day;
    },
    setDateTime(state, action: PayloadAction<{ time: string }>){
      state.information.date.time = action.payload.time;
    },
    setSpeedometerVisibility(state, action: PayloadAction<{ visibility: boolean }>){
      state.vehicle.visible = action.payload.visibility;
    },
    setMaximumSpeed(state, action: PayloadAction<{ speed: number }>){
      state.vehicle.maximumVehicleSpeed = action.payload.speed;
    },
    setSpeed(state, action: PayloadAction<{ speed: number }>){
      state.vehicle.speedometer.speed = action.payload.speed;
    },
    setFuel(state, action: PayloadAction<{ fuel: number }>){
      state.vehicle.speedometer.fuel = action.payload.fuel;
    },
    setEngineHealth(state, action: PayloadAction<{ health: number }>){
      state.vehicle.speedometer.engine.health = action.payload.health;
    },
    setEngineTurnedOn(state, action: PayloadAction<{ turnedOn: boolean }>){
      state.vehicle.speedometer.engine.turnedOn = action.payload.turnedOn;
    },
    setDoorsUnlocked(state, action: PayloadAction<{ unlocked: boolean }>){
      state.vehicle.speedometer.doors = action.payload.unlocked;
    },
    setSeatBelt(state, action: PayloadAction<{ seatBelt: boolean }>){
      state.vehicle.speedometer.seatBelt = action.payload.seatBelt;
    },
    setHeadlights(state, action: PayloadAction<{ headlights: 'high' | 'low' | 'off' }>){
      state.vehicle.speedometer.headlights = action.payload.headlights;
    },
    setTurnSignals(state, action: PayloadAction<{ turnSignals: 'left' | 'right' | 'both' | 'off' }>){
      state.vehicle.speedometer.turnSignals = action.payload.turnSignals;
    }
  }
});

export default hudSlice.reducer;
