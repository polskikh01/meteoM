import {Block} from 'shared/block';
import {TextOut} from 'shared/textOut';
import {currentWeatherAPI} from 'app/services/currentWeatherService';
import {useEffect, useState} from 'react';
import {Loader} from '@mantine/core';
import * as dayjs from 'dayjs';
import {IconMoon} from '@tabler/icons-react';
import {WeatherCard} from 'widgets/weatherCard';


export const CurrentWeather = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const geolocationAPI = navigator.geolocation;

  const getUserCoordinates = () => {
    if (geolocationAPI) {
      geolocationAPI.getCurrentPosition((position) => {
        const {coords} = position;
        setLat(coords.latitude);
        setLon(coords.longitude);
      });
    }
  };

  const {
    data,
    isLoading,
    error,
  } = currentWeatherAPI.useFetchCurrentWeatherQuery(
      {
        lat: lat,
        lon: lon,
      },
  );

  useEffect(() => {
    return getUserCoordinates();
  }, []);

  return data && <Block>
    <WeatherCard
      timesDay='Now'
      time={dayjs().format('hh:mm')}
      currentTemp={data.main.temp}
      icon={<IconMoon/>}
    />
    <TextOut>
      {
        isLoading && <Loader />
      }
      {
        error && <TextOut>{JSON.stringify(error)}</TextOut>
      }
    </TextOut>
  </Block>;
};
