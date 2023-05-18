import {
  CloudsItem,
  CoordItem,
  MainItem,
  PrecipitationItem,
  SysItem,
  WatherItem,
  WindItem,
} from 'app/store/models/weather/items';

export interface WetherData {
    coord: CoordItem,
    weather: WatherItem[],
    base: string,
    main: MainItem,
    visibility: number,
    wind: WindItem,
    clouds: CloudsItem,
    rain?: PrecipitationItem,
    snow?: PrecipitationItem,
    dt: number,
    sys: SysItem,
    timezone: number,
    id: number,
    name: string,
    cod: number,
}
