import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {currentWeatherAPI} from 'app/services/currentWeatherService';
import currentWeather from 'app/store/reducers/CurrentWeatherReducer/slices';
import {currentWeatherAPI as API} from 'app/services/currentWeatherService';

const rootReducers = combineReducers({
  currentWeather,
  [currentWeatherAPI.reducerPath]: API.reducer,
});


export const store = () => configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(API.middleware);
  },
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
