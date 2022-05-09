// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Type
export type SpawnPointsType = typeof initialState.points;

// Initial state
const initialState = {
  isShown: true,
  points: [
    {
      index: 0,
      blocked: true,
      nearBuis: 'Cafe Crusual-Fix',
      health: '64%',
      food: '42%'
    },
    {
      index: 1,
      blocked: false,
      houseNumber: 12,
      houseClass: 'Люкс',
      houseMoney: '400$'
    },
    {
      index: 2,
      blocked: true,
      fractionType: 'Государственная',
      fractionName: 'LSPD',
      fractionRank: 'Офицер'
    }
  ]
};

export const spawnSelectSlice = createSlice({
  name: 'spawnSelect',
  initialState,
  reducers: {
    setSelectSpawnVisibility(state, action: PayloadAction<{ visibility: boolean }>) {
      state.isShown = action.payload.visibility;
    },
    setSpawnPoints(state, action: PayloadAction<{ points: typeof initialState.points }>){
      state.points = action.payload.points;
    }
  }
});

export default spawnSelectSlice.reducer;