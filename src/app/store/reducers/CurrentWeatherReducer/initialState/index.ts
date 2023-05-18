import {WetherData} from 'app/store/models/weather';

interface WeatherState {
    weather: WetherData | null,
    isLoading: boolean,
    error: string
}

export const initialState: WeatherState = {
  weather: null,
  isLoading: false,
  error: '',
};
