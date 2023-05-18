import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {WetherData} from 'app/store/models/weather';

const token = 'e9f1b9174f1c0c19dd0dbc1997d53174';
interface currentWeatherRequest {
  lat: number,
  lon: number,
  appid?: string,
  units?: string
}

export const currentWeatherAPI = createApi({
  reducerPath: 'currentWeatherAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/'}),
  endpoints: (build) => ({
    fetchCurrentWeather: build.query<WetherData, currentWeatherRequest>({
      query: ({lat, lon, appid = token, units = 'metric'}) => ({
        url: `data/2.5/weather`,
        params: {
          lat, lon, appid, units,
        },
      }),
    }),
  }),
});
