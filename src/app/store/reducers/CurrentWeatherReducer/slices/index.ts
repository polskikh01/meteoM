import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  initialState,
} from 'app/store/reducers/CurrentWeatherReducer/initialState';
import {
  fetchCurrentWeather,
} from 'app/store/reducers/CurrentWeatherReducer/actions';
import {WetherData} from 'app/store/models/weather';

export const currentWeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentWeather.fulfilled.type]:
      (state, action: PayloadAction<WetherData>) => {
        state.isLoading = false;
        state.weather = action.payload;
      },
    [fetchCurrentWeather.pending.type]:
      (state) => {
        state.isLoading = true;
      },
    [fetchCurrentWeather.rejected.type]:
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
  },
});

export default currentWeatherSlice.reducer;
