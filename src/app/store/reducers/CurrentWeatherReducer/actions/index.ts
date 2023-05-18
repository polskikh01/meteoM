import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCurrentWeather = createAsyncThunk(
    'weather/current',
    async (_, thunkAPI) => {
      try {
        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=52.0081929&lon=47.7101613&appid=e9f1b9174f1c0c19dd0dbc1997d53174&lang=ru&units=metric',
        );
        return response.json();
      } catch (e) {
        return thunkAPI.rejectWithValue('Не удалось получить текущую погоду');
      }
    },
);
