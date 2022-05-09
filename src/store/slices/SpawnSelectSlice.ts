// Import modules
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

// Type
export type SpawnPointsArrayType = typeof initialState.points;

// Initial state
const initialState = {
  isShown: true,
  points: [
    {
      index: 0,
      blocked: true,
      nearBuis: 'Стандартное значение аренды',
      health: '0%',
      food: '0%'
    },
    {
      index: 1,
      blocked: true,
      houseNumber: 1,
      houseClass: 'Стандартный класс дома',
      houseMoney: '0$'
    },
    {
      index: 2,
      blocked: true,
      fractionType: 'Частная',
      fractionName: 'Meta Role Play',
      fractionRank: 'Разработчик. Привет, игрок.'
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
